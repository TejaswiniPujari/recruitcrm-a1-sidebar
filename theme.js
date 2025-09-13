// 'light' | 'dark'

const getThemePreference = () =>
  localStorage.getItem("theme-preference") || "light";
const setPreference = (value) =>
  localStorage.setItem("theme-preference", value);

const updateTheme = (value) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", value);

  const indicator = document.getElementById("indicator");
  indicator.dataset.state = value === "dark" ? "dark" : "light";

  const btn = document.getElementById("themeToggle");
  btn.setAttribute("aria-pressed", value === "dark");

  const label = document.getElementById("themeLabel");
  label.textContent = value.charAt(0).toUpperCase() + value.slice(1);
};

// Initialize
updateTheme(getThemePreference());

// sync when OS preference changes
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (getThemePreference() === "light") updateTheme("light");
});

//toggle theme
document.getElementById("themeToggle").addEventListener("click", () => {
  const current = getThemePreference();
  const next = current === "light" ? "dark" : "light";
  setPreference(next);
  updateTheme(next);
});
