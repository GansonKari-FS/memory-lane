const themeButton = document.getElementById("themeToggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeButton.textContent = "Light Mode";
    } else {
      themeButton.textContent = "Dark Mode";
    }
  });
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

console.log("Memory Lane website loaded successfully.");
