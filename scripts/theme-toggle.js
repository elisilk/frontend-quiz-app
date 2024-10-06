const storageKey = "theme";

const getColorPreference = () => {
  return (
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
};

var storedTheme = getColorPreference();
var themeToggle;

const setPreference = () => {
  localStorage.setItem(storageKey, storedTheme);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", storedTheme);
  if (themeToggle) themeToggle.checked = storedTheme == "dark";
};

reflectPreference();

window.onload = () => {
  themeToggle = document.getElementById("theme-toggle");

  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  themeToggle.addEventListener("click", onClick);
};

const onClick = () => {
  storedTheme = storedTheme === "light" ? "dark" : "light";
  setPreference();
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    storedTheme = isDark ? "dark" : "light";
    setPreference();
  });
