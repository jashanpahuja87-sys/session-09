/* =========================
   DARK / LIGHT THEME
========================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("jashan-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeIcon.textContent = "☀";
} else {
  themeIcon.textContent = "☾";
}


themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  if (isLight) {

    themeIcon.textContent = "☀";

    localStorage.setItem(
      "jashan-theme",
      "light"
    );

  } else {

    themeIcon.textContent = "☾";

    localStorage.setItem(
      "jashan-theme",
      "dark"
    );

  }

});


/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    navbar.style.position = "sticky";
    navbar.style.top = "0";

    navbar.style.backdropFilter = "blur(18px)";

    navbar.style.background =
      "color-mix(in srgb, var(--bg) 82%, transparent)";

    navbar.style.borderBottom =
      "1px solid var(--border)";

  } else {

    navbar.style.position = "relative";

    navbar.style.backdropFilter = "none";

    navbar.style.background = "transparent";

    navbar.style.borderBottom = "none";

  }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".section, .service-card, .project, .technology, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

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

  element.style.transform = "translateY(30px)";

  element.style.transition =
    "opacity 0.8s ease, transform 0.8s ease";

  observer.observe(element);

});


const revealStyle = document.createElement("style");

revealStyle.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;

document.head.appendChild(revealStyle);


/* =========================
   PROJECT 3D HOVER
========================= */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

  project.addEventListener("mousemove", (event) => {

    const rect = project.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * -4;
    const rotateY = (x - 0.5) * 4;

    project.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-6px)`;

  });


  project.addEventListener("mouseleave", () => {

    project.style.transform = "";

  });

});


/* =========================
   AI ORB INTERACTION
========================= */

const aiCard = document.querySelector(".ai-card");

aiCard.addEventListener("mousemove", (event) => {

  const rect = aiCard.getBoundingClientRect();

  const x =
    (event.clientX - rect.left) / rect.width;

  const y =
    (event.clientY - rect.top) / rect.height;

  const moveX = (x - 0.5) * 15;
  const moveY = (y - 0.5) * 15;

  aiCard.style.transform =
    `perspective(1000px)
     rotateX(${moveY * -0.4}deg)
     rotateY(${moveX * 0.4}deg)`;

});


aiCard.addEventListener("mouseleave", () => {

  aiCard.style.transform = "";

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });


  navLinks.forEach((link) => {

    link.style.color = "";

    if (
      link.getAttribute("href") === `#${current}`
    ) {
      link.style.color = "var(--text)";
    }

  });

});


/* =========================
   EMAIL BUTTON
========================= */

const contactButtons =
  document.querySelectorAll(
    'a[href^="mailto:"]'
  );

contactButtons.forEach((button) => {

  button.addEventListener("click", () => {

    console.log(
      "Starting conversation with Jashan Pahuja..."
    );

  });

});