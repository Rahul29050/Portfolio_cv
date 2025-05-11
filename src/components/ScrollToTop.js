import React, { useState, useEffect } from "react";
import "./ScrollToTop.css"; // Import CSS for styling
import { FaArrowUp } from "react-icons/fa"; // Using FontAwesome arrow icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? "show" : ""}`} onClick={scrollToTop}>
      <FaArrowUp className="arrow-icon" />
    </div>
  );
};

export default ScrollToTop;
