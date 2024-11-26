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

//why choose us animation
const wcuInfo = document.querySelector('.wcu-info'); 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 }); 

wcuInfo.querySelectorAll('div').forEach(div => {
  observer.observe(div);
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 100) {
    wcuInfo.querySelectorAll('div').forEach(div => {
      div.classList.remove('show'); 
    });
  }
});

// About Us Section
const aboutSection = document.querySelector('#about-wrapper');
const aboutTitle = aboutSection.querySelector('.about-title');
const aboutInfo = aboutSection.querySelector('.about-info');

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 }); 

aboutObserver.observe(aboutTitle);
aboutObserver.observe(aboutInfo);

// Contact Us Section
const contactSection = document.querySelector('#contact');
const contactTitle = contactSection.querySelector('.contact-title');
const contactBoxes = contactSection.querySelector('.boxes');
const emailSection = contactSection.querySelector('.email'); // Select the email element

// Boxes Observer
const boxesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-boxes');
    } else {
      entry.target.classList.remove('show-boxes');
    }
  });
}, { threshold: 0.3 });

boxesObserver.observe(contactBoxes); // Observe the boxes

// Email Observer
const emailObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-email');
    } else {
      entry.target.classList.remove('show-email');
    }
  });
}, { threshold: 0.3 });

emailObserver.observe(emailSection);


//contact us title
const contactTitleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-contact-title');
    } else {
      entry.target.classList.remove('show-contact-title');
    }
  });
}, { threshold: 0.5 });
contactTitleObserver.observe(contactTitle);

//about us title
const aboutTitleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-about-title');
    } else {
      entry.target.classList.remove('show-about-title');
    }
  });
}, { threshold: 0.5 });
aboutTitleObserver.observe(aboutTitle);