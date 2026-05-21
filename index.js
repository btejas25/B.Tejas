/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});


/* =========================
   SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  const trigger = window.innerHeight / 1.2;

  sections.forEach((section) => {

    const top = section.getBoundingClientRect().top;

    if(top < trigger){
      section.classList.add("show");
    }

  });

});


/* =========================
   HERO TEXT ANIMATION
========================= */

const heroTitle = document.querySelector(".hero h1");

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(50px)";

setTimeout(() => {

  heroTitle.style.transition = "1s ease";
  heroTitle.style.opacity = "1";
  heroTitle.style.transform = "translateY(0px)";

}, 300);
