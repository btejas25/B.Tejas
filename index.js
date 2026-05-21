// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

});


// SIMPLE FADE-IN ANIMATION

const cards = document.querySelectorAll(
  ".skill-card, .project-card, .color-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }

  });

}, {
  threshold: 0.2
});


cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.8s ease";

  observer.observe(card);

});
