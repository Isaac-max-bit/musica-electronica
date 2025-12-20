// ===============================
// ElectroBeat - Interacciones JS
// ===============================

// 1️⃣ Mensaje en consola
console.log("🎧 ElectroBeat cargado correctamente");

// 2️⃣ Cambiar texto del botón del hero al hacer clic
const heroBtn = document.querySelector(".hero .btn");

heroBtn.addEventListener("click", () => {
  heroBtn.textContent = "🎶 Artistas cargando...";
});

// 3️⃣ Mostrar mensaje al enviar el formulario
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita recargar la página

  alert("✅ Mensaje enviado correctamente. ¡Nos vemos en ElectroBeat!");

  contactForm.reset();
});

// 4️⃣ Interacción extra: resaltar evento al hacer clic
const eventos = document.querySelectorAll(".evento-card");

eventos.forEach((evento) => {
  evento.addEventListener("click", () => {
    evento.style.outline = "3px solid #1bd6b8";
  });
});
