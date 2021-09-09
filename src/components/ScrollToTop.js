import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById("main").scrollTo(0, 0);
  }, [pathname]);

  return null;
}
