(() => {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  let chosenTheme = null;

  try {
    const savedTheme = localStorage.getItem("academic-homepage-cartoon-theme");
    if (savedTheme === "light" || savedTheme === "dark") chosenTheme = savedTheme;
  } catch {}

  function applyTheme() {
    const currentTheme = chosenTheme || (preference.matches ? "dark" : "light");
    root.dataset.theme = currentTheme;
    button.textContent = currentTheme === "dark" ? "Light mode" : "Dark mode";
    button.setAttribute("aria-label", `Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`);
  }

  applyTheme();
  button.hidden = false;
  button.addEventListener("click", () => {
    chosenTheme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("academic-homepage-cartoon-theme", chosenTheme);
    } catch {}
    applyTheme();
  });
  preference.addEventListener("change", applyTheme);
})();
