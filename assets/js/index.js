document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check local storage for dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    const icon = darkModeToggle.querySelector("i");
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  }

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const icon = darkModeToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");

    // Save the user's preference in local storage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
