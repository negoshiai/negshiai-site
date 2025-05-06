// Premium Redesign JS based on Buzzworthy Studio Inspiration

document.addEventListener("DOMContentLoaded", function() {

    // --- Mobile Navigation --- 
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close mobile menu when clicking on a nav link
        navLinks.querySelectorAll("a").forEach(item => {
            item.addEventListener("click", function() {
                if (hamburger.classList.contains("active")) {
                    hamburger.classList.remove("active");
                    navLinks.classList.remove("active");
                }
            });
        });
    }

    // --- Intersection Observer for Scroll Animations --- 
    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1 // Trigger animation when 10% is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Optional: Unobserve after first animation
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class to re-animate on scroll up
                // entry.target.classList.remove("visible"); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- Smooth Scrolling --- 
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            // Ensure it's an internal link and not just "#"
            if (href && href.startsWith("#") && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = 80; // Approximate height of fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // --- Header Scroll Effect --- 
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // --- Morphing Blob Animation (Placeholder) --- 
    // The CSS provides a basic morphing effect.
    // For a more advanced effect like Buzzworthy Studio, 
    // you would typically use a JavaScript library (like Three.js with shaders)
    // or complex SVG animations. Implementing that here is complex.
    // This placeholder indicates where such logic would be integrated.
    const blobContainer = document.querySelector(".morphing-blob-container");
    if (blobContainer) {
        // console.log("Morphing blob container found. Advanced JS animation would go here.");
        // Example: Initialize a Three.js scene, create a mesh with noise/displacement,
        // and animate it in the render loop.
    }

    // --- Remove Old/Unused JS --- 
    // Removed old parallax, ai-circle animation, star creation, chat button logic.

});

