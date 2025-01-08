const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const contactForm = document.querySelector("#contact form");
const successMessage = document.getElementById("success-message");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    try {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Desplazamiento suave a la sección correspondiente
      targetSection.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error al navegar a la sección: ", error);
    }
  });
});

// Animaciones al hacer hover en los proyectos
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Mostrar un efecto de animación al desplazarse
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
); // Umbral más alto (30%)

sections.forEach((section) => {
  observer.observe(section);
});
