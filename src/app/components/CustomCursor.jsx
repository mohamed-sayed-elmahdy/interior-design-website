"use client";
import Image from "next/image";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "630px",
        height: "630px",
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.22) 1%, rgba(255,255,255,0) 60%)',

        borderRadius: "50%",
        zIndex: 100,
        opacity: 0.53,
      }}
    ></div>
  );
};

export default CustomCursor;
