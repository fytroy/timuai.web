/* ---
js/main.js
Timu AI - Main JavaScript
--- */

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Sticky Header on Scroll ---
    const header = document.getElementById("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const body = document.body;

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        body.classList.toggle("no-scroll"); // Optional: prevent scrolling when menu is open
    });

    // Close mobile menu when a link is clicked
    mobileMenu.addEventListener("click", function(e) {
        if (e.target.tagName === 'A') {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });

    // --- 3. Intersection Observer for Scroll Animations ---
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get delay from data-attribute
                const delay = entry.target.dataset.animateDelay || 0;

                setTimeout(() => {
                    entry.target.classList.add("is-visible");
                }, delay);

                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});