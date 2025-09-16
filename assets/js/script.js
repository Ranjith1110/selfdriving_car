document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const carCards = document.querySelectorAll("#vehicleGrid > div");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const brand = button.getAttribute("data-brand");

      filterButtons.forEach(btn => btn.classList.remove("bg-black", "text-white"));
      filterButtons.forEach(btn => btn.classList.add("bg-gray-100", "text-black"));

      button.classList.remove("bg-gray-100", "text-black");
      button.classList.add("bg-black", "text-white");

      carCards.forEach(card => {
        if (brand === "all" || card.getAttribute("data-brand") === brand) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});


const menuToggle = document.getElementById("menu-toggle");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuOpen.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
});