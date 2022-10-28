import { useEffect } from "react";
type refProp = React.RefObject<HTMLElement>;
type eventType = MouseEvent | TouchEvent;
type handlerProp = (event: eventType) => void;

export const useOutsideClickClose = (ref: refProp, handler: handlerProp) => {
  useEffect(() => {
    const listner = (event: eventType) => {
      if (!ref.current?.contains(event.target as Node)) {
        handler(event);
      }
    };
    window.addEventListener("mousedown", listner);
    window.addEventListener("touchstart", listner);

    return () => {
      window.removeEventListener("mousedown", listner);
      window.removeEventListener("touchstart", listner);
    };
  }, [ref, handler]);
};
