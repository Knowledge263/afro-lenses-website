const form = document.querySelector("form");
const success = document.getElementById("successMessage");

form.addEventListener("submit", () => {
  setTimeout(() => {
    success.style.display = "block";
    form.reset();
  }, 500);
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach((fade) => {
  appearOnScroll.observe(fade);
});
