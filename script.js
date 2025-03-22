const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav__links a");

  // Function to set active class
  function setActiveLink() {
    navLinks.forEach(link => link.classList.remove("active")); // Remove active from all
    this.classList.add("active"); // Add active to clicked link
  }

  // Add click event listener to each link
  navLinks.forEach(link => link.addEventListener("click", setActiveLink));
});

// the contact section scoller work only on the home page

document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal().reveal('.contact__section', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true
  });


 


  // Bounce animation on load
  const contactSection = document.querySelector('.contact__section');
  contactSection.style.animation = "bounce 1s ease";

  contactSection.addEventListener('animationend', () => {
    contactSection.style.animation = "";
  });

  // Adding bounce animation styles dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(style);
});




//  ends of the scroller part



ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("header form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".experience__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".experience__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".experience__stats", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".subscribe .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe form", {
  ...scrollRevealOption,
  delay: 500,
});





// contact section goback buttton

// JavaScript function to go back to the previous page
function goBack() {
    window.history.back();
}





document.querySelector('.dropdown__btn').addEventListener('click', function () {
  document.querySelector('.goog-te-menu-value').click();
});