import React from "react";

type intersectionProps = {
  reference: React.RefObject<HTMLElement>;
};

const useIntersectionObserver = ({ reference }: intersectionProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((item) => {
        if (item.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    return () => {};
  }, []);

  return [isVisible];
};

export default useIntersectionObserver;
