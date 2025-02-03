function toggleMode() {
  const body = document.body;
  const button = document.getElementById("toggle-button");
  body.classList.toggle("dark-mode");
  button.textContent = body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
}
