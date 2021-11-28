import { useState, useEffect } from "react";

const useWindow = () => {
  //TODO: Manage screen-size state
  const [windowSize, setWindowSize] = useState<number | null>(null);
  const [size, setSize] = useState<number | null>(windowSize);

  useEffect(() => {
    setWindowSize(window.screen.width);
  }, []);

  //TODO: Monitor the screen size to enable image responsiveness
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", (e) => {
        setSize(window.innerWidth);
      });
    };
  });

  return { size };
};

export default useWindow;
