import { useState, useEffect } from "react";

export default function useWindowWidth(window) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWidthChange() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  });

  return windowWidth;
}
