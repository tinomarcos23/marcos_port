
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. STAGGERED CARD ANIMATION 
    const projectCards = document.querySelectorAll(".project-card");

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 100); // Faster stagger for more cards
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        cardObserver.observe(card);
    });

    // 2. VIDEO HOVER EFFECTS
    const videos = document.querySelectorAll(".project-card video");

    videos.forEach((video, index) => {
        // Pause all other videos when hovering one
        video.addEventListener("mouseenter", () => {
            videos.forEach((otherVideo, otherIndex) => {
                if (otherIndex !== index) {
                    otherVideo.pause();
                    otherVideo.currentTime = 0;
                }
            });
            video.play();
        });

        // Pause on mouse leave
        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });

        // Auto-pause when not visible
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.pause();
                    entry.target.currentTime = 0;
                }
            });
        });

        videoObserver.observe(video);
    });

    // 3. SMOOTH VIDEO LOAD ANIMATION
    const videoContainers = document.querySelectorAll(".project-media");

    const videoLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target.querySelector("video");
                if (video) {
                    video.style.opacity = "1";
                    video.style.transform = "scale(1)";
                }
                videoLoadObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    videoContainers.forEach(container => {
        videoLoadObserver.observe(container);
    });

    // 4. PROJECT TITLE ANIMATION
    const projectsTitle = document.querySelector(".projects-title");
    if (projectsTitle) {
        const titleText = projectsTitle.textContent;
        projectsTitle.innerHTML = ""; // Clear text

        let index = 0;
        const speed = 80;

        function typeTitle() {
            if (index < titleText.length) {
                projectsTitle.textContent += titleText.charAt(index);
                index++;
                setTimeout(typeTitle, speed);
            }
        }

        // Start typing after 500ms
        setTimeout(typeTitle, 500);
    }
});