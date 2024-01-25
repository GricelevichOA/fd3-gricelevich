import { useEffect, useState } from "react";

const TIMER_UPDATE_MS = 100;

export function Mouse() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const timerId = setInterval((e) => {}, TIMER_UPDATE_MS);

    return () => {
      clearInterval(timerId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      (page /mouse)
      <div className="coords">
        <div>X: {mouseX}</div>
        <div>Y: {mouseY}</div>
      </div>
    </div>
  );
}
