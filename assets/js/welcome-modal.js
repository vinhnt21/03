document.addEventListener("DOMContentLoaded", function () {
  // Welcome Modal
  const hasVisited = localStorage.getItem("hasVisited");
  if (!hasVisited) {
    const welcomeModal = new bootstrap.Modal(
      document.getElementById("welcomeModal")
    );
    welcomeModal.show();
    localStorage.setItem("hasVisited", "true");
  }
});
