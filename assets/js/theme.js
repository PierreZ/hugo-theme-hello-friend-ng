// Toggle theme

const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");
if (getTheme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  isDark ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
  isDark ? mermaid.initialize({ theme: 'dark', startOnLoad: true}): mermaid.initialize({ theme: 'default', startOnLoad: true });
} else {
  mermaid.initialize({ theme: 'dark', startOnLoad: true});
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
    location.reload(); 
});