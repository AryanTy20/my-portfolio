import React from "react";

type intersectionProps = React.RefObject<HTMLElement>;

export const useIntersectionObserver = (ref: intersectionProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((item) => {
        if (item.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(item.target);
        }
      });
    });
    ref.current && observer.observe(ref.current);
  }, []);

  return isVisible;
};
