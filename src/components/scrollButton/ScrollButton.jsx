import { useState, useEffect } from "react";
import "./scrollButton.css"; // Assumindo que você tenha um arquivo CSS

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <button onClick={scrollToTop} className="scroll-to-top">
        ↑
      </button>
    )
  );
};

export default ScrollButton;
