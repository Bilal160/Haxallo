import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageLoaded() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false);

    const checkAllImages = (): boolean => {
      const images = Array.from(document.querySelectorAll("img"));
      if (images.length === 0) return true;
      return images.every((img) => img.complete && img.naturalHeight !== 0);
    };

    const markLoaded = () => {
      setIsFirstLoad(false);
      setIsLoaded(true);
    };

    const initTimer = setTimeout(() => {
      if (checkAllImages()) {
        markLoaded();
        return;
      }

      const interval = setInterval(() => {
        if (checkAllImages()) {
          clearInterval(interval);
          clearTimeout(safetyTimeout);
          markLoaded();
        }
      }, 100);

      const safetyTimeout = setTimeout(() => {
        clearInterval(interval);
        markLoaded();
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(safetyTimeout);
      };
    }, 50);

    return () => clearTimeout(initTimer);
  }, [location.pathname]);

  return { isLoaded, isFirstLoad };
}
