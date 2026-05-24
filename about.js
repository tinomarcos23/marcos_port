document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("intro-text");
    const text = element.textContent;
    element.textContent = "";

    let index = 0;
    const speed = 30;

    function typeEffect() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {


    const cards = document.querySelectorAll(".cert-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 150); // stagger effect
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});
// ===== SKILLS ANIMATION FIX =====
const skillItems = document.querySelectorAll(".skills-list span");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            const items = entry.target.querySelectorAll("span");

            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("show");
                }, index * 120);
            });
        }
    });
}, {
    threshold: 0.3
});

const skillsList = document.querySelector(".skills-list");
if (skillsList) skillObserver.observe(skillsList);