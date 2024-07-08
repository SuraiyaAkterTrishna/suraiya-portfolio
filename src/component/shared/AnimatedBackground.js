import React, { useState } from "react";
import mainBg from "../../assets/images/main_bg.png";

const AnimatedBackground = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const offsetX = mouseX / window.innerWidth;
    const offsetY = mouseY / window.innerHeight;
    setOffsetX(offsetX);
    setOffsetY(offsetY);
  };

  return (
    <div
      id="animated-bg"
      className="lm-animated-bg"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundPosition: `calc(50% + ${offsetX * 10}px) calc(50% + ${offsetY * 10}px)`,
      }}
    ></div>
  );
};

export default AnimatedBackground;
