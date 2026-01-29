const items = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const toggle = document.querySelector(".toggle");

let currentIndex = 0;

/* LIGHTBOX */
items.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = items[currentIndex].src;
}

document.querySelector(".close").onclick = () => {
    lightbox.style.display = "none";
};

document.querySelector(".next").onclick = nextImage;
document.querySelector(".prev").onclick = prevImage;

function nextImage() {
    currentIndex = (currentIndex + 1) % items.length;
    openLightbox();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    openLightbox();
}

/* KEYBOARD CONTROLS */
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") lightbox.style.display = "none";
    }
});

/* DARK MODE */
toggle.onclick = () => {
    document.body.classList.toggle("dark");
};

/* FILTERS */
const buttons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {
            item.style.display =
                filter === "all" || item.classList.contains(filter)
                ? "block"
                : "none";
        });
    });
});
