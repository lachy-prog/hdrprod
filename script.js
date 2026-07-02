// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.9)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "#0f172a";
        });

    } else {
        navbar.style.background = "rgba(255,255,255,0.15)";
        navbar.style.boxShadow = "none";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "white";
        });
    }
});


// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// PORTFOLIO VIDEO MODAL

const playButtons = document.querySelectorAll(".play-btn");
const modal = document.querySelector(".video-modal");
const modalVideo = document.querySelector("#modalVideo");
const modalSource = modalVideo.querySelector("source");
const closeModal = document.querySelector(".close-modal");

playButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const videoPath = `assets/video/project${index + 1}.mp4`;

        modalSource.src = videoPath;
        modalVideo.load();

        modal.style.display = "flex";
        modalVideo.play();
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalVideo.pause();
    }
});


// AUTOPLAY PORTFOLIO PREVIEW ON HOVER

const portfolioVideos = document.querySelectorAll(".portfolio-card video");

portfolioVideos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});


// GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");

        const img = document.createElement("img");
        img.src = image.src;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});


// SCROLL REVEAL

const sections = document.querySelectorAll(".section");

const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
