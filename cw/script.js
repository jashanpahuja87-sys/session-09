const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggle.textContent = "☀";
} else {
  themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  if (isLight) {
    themeToggle.textContent = "☀";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "☾";
    localStorage.setItem("theme", "dark");
  }

});


// Navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {
    navbar.style.background = "color-mix(in srgb, var(--bg) 85%, transparent)";
    navbar.style.backdropFilter = "blur(15px)";
    navbar.style.position = "sticky";
    navbar.style.top = "0";
    navbar.style.zIndex = "100";
  } else {
    navbar.style.background = "transparent";
    navbar.style.backdropFilter = "none";
  }

});


// Smooth reveal animation

const revealElements = document.querySelectorAll(
  ".section, .service-card, .project-card, .detail-card"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(element);

});


// Project card interaction

document.querySelectorAll(".project-card").forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

});