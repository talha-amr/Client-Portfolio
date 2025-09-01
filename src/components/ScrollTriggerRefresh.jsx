import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTriggerRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    // Only refresh, don't kill anything
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("ScrollTrigger refreshed after route:", location.pathname);
    }, 50); // small delay to ensure DOM is mounted

    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

export default ScrollTriggerRefresh;
