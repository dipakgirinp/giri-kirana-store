//menu button
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".bi");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  menuButton.addEventListener("click", () => {
      dropdownMenu.style.display = 
          dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (event) => {
      if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = "none";
      }
  });
});



