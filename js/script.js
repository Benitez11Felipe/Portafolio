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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.elements.name.value.trim();
  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();

  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos antes de enviar.");
    if (!name) document.getElementById("name").style.borderColor = "red";
    if (!email) document.getElementById("email").style.borderColor = "red";
    if (!message) document.getElementById("message").style.borderColor = "red";
    return;
  }

  // Mostrar mensaje de éxito
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000); // Ocultar mensaje después de 3 segundos

  contactForm.reset(); // Limpiar formulario
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
