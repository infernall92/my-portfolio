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
      className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-10"
      style={{
        transform: `translate(${position.x - 192}px, ${position.y - 192}px)`,
      }}
    />
  );
};

export default CursorDot;
