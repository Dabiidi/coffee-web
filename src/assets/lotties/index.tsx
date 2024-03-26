import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./coffee.json";

const Coffee = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
        renderer: "svg",
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      style={{
        width: 100,
        height: 100,
        position: "relative",
      }}
    />
  );
};

export default Coffee;
