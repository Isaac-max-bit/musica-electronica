// ===============================
// ElectroBeat - Interacciones JS
// ===============================

// 1️⃣ Alerta de bienvenida al cargar la página
window.addEventListener("load", () => {
  alert("🎧 Bienvenido a ElectroBeat 2025");
  console.log("ElectroBeat cargado correctamente");
});

// 2️⃣ Cambiar texto del botón del hero
const heroBtn = document.querySelector(".hero .btn");

heroBtn.addEventListener("click", () => {
  alert("🎶 Explorando artistas...");
  heroBtn.textContent = "🎵 Cargando artistas...";
});

// 3️⃣ Alerta al enviar el formulario
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("✅ Mensaje enviado con éxito. ¡Gracias por contactarnos!");
  contactForm.reset();
});

// 4️⃣ Alerta + efecto al hacer clic en eventos
const eventos = document.querySelectorAll(".evento-card");

eventos.forEach((evento) => {
  evento.addEventListener("click", () => {
    alert("📍 Evento seleccionado");
    evento.style.outline = "3px solid #1bd6b8";
  });
});

// 5️⃣ Alerta genérica para TODOS los botones
const botones = document.querySelectorAll("button, .btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log("Botón presionado");
  });
});
