// Botón de modo claro/oscuro
const toggleBtn = document.getElementById("mode-toggle");

// Revisar si ya había preferencia guardada
if (localStorage.getItem("mode") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙"; // Icono para volver a oscuro
    localStorage.setItem("mode", "light");
  } else {
    toggleBtn.textContent = "☀️"; // Icono para volver a claro
    localStorage.setItem("mode", "dark");
  }
});
