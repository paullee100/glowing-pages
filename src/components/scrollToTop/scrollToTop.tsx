"use client";

import React, { useEffect, useState } from 'react'
import styles from "./scrollToTop.module.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const toggleVisibility = () => {
            // if the user scrolls down, show the button
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
        }
        // listen for scroll events
        window.addEventListener("scroll", toggleVisibility);

        // clear the listener on component unmount
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, []);

    // handles the animation when scrolling to the top
    const scrollToTop = () => {
        isVisible && window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    };

    return (
    <div className={`${styles.button} ${isVisible ? styles.visible : styles.invisible}`} onClick={scrollToTop}>
        Go back to Top
    </div>
  )
}

export default ScrollToTopButton