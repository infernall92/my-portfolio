import { useEffect, useState } from "react";

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-16 h-16 bg-cyan-500 rounded-full blur-3xl opacity-90"
      style={{
        transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
      }}
    />
  );
};

export default CursorDot;
