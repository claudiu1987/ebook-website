// Add custom JavaScript here

function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("bg-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("bg-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
