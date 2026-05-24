document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Creative Developer", "Video Editor", "Graphic Designer"];
    let index = 0;

    const roleElement = document.getElementById("role");

    setInterval(() => {
        index = (index + 1) % roles.length;
        roleElement.textContent = roles[index];
    }, 2000); // change every 2 seconds
});

document.addEventListener("DOMContentLoaded", () => {

    const h1 = document.querySelector("h1");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(h1);

});

document.addEventListener("DOMContentLoaded", () => {

    
    const h1 = document.querySelector("h1");
    const description = document.querySelector(".description");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(h1);
    observer.observe(description);

});