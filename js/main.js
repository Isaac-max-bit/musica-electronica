/**
 * ElectroBeat 2025 — Logic & Interactions
 * Versión final refinada y sólida
 */

document.addEventListener("DOMContentLoaded", () => {

  console.log("ElectroBeat 2025 — JavaScript cargado correctamente ⚡");

  /* ==========================================
     1. NAVBAR DINÁMICA
     ========================================== */
  const navbar = document.querySelector(".navbar");

  const handleScroll = () => {
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });


  /* ==========================================
     2. ANIMACIONES AL HACER SCROLL
     ========================================== */
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate").forEach(el => {
    revealObserver.observe(el);
  });


  /* ==========================================
     3. FORMULARIOS — FEEDBACK VISUAL
     ========================================== */
  document.querySelectorAll(".contact-form, .subscribe-box").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const button = form.querySelector("button");
      if (!button) return;

      const originalText = button.innerHTML;
      button.disabled = true;
      button.innerHTML = "⚡ Enviando...";

      console.log("📩 Formulario enviado");

      setTimeout(() => {
        button.innerHTML = "✅ ¡Enviado!";
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";

        form.reset();

        setTimeout(() => {
          button.disabled = false;
          button.innerHTML = originalText;
          button.style.backgroundColor = "";
          button.style.color = "";
        }, 2500);

      }, 1200);
    });
  });


  /* ==========================================
     4. SCROLL SUAVE
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });


  /* ==========================================
     5. MENSAJE EN CONSOLA AL HACER CLIC
     ========================================== */
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      console.log("⚡ Botón presionado por el usuario");
    });
  });

});
