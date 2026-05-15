document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuToggle =
  document.querySelector(".menu-toggle");

  const navLinks =
  document.querySelector(".nav-links");

  if(menuToggle){

    menuToggle.addEventListener("click", function () {

      navLinks.classList.toggle("active");

      menuToggle.querySelector("i")
      .classList.toggle("fa-times");

      menuToggle.querySelector("i")
      .classList.toggle("fa-bars");

    });

  }

  /* =========================
     SMOOTH SCROLL
  ========================= */

  document.querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const targetId =
      this.getAttribute("href");

      const targetElement =
      document.querySelector(targetId);

      if(targetElement){

        window.scrollTo({

          top: targetElement.offsetTop - 80,

          behavior: "smooth",

        });

      }

    });

  });

  /* =========================
     PORTFOLIO
  ========================= */

  const portfolioGrid =
  document.querySelector(".portfolio-grid");

  if(portfolioGrid){

    const portfolioData = [

      {
        image: "assets/skincare2.jpeg",
        category: "editorial",
      },

      {
        image: "assets/bride.jpeg",
        category: "bridal",
      },

      {
        image: "assets/celebhrity1.jpeg",
        category: "celebrity",
      },

      {
        image: "assets/fantasy5.jpeg",
        category: "fantasy",
      },

      {
        image: "assets/skincare.jpeg",
        category: "editorial",
      },

      {
        image: "assets/bride2.jpeg",
        category: "bridal",
      },

      {
        image: "assets/celebhrity2.jpeg",
        category: "celebrity",
      },

      {
        image: "assets/god2.jpeg",
        category: "fantasy",
      }

    ];

    portfolioGrid.innerHTML = "";

    portfolioData.forEach((item) => {

      const portfolioItem =
      document.createElement("div");

      portfolioItem.className =
      `portfolio-item ${item.category}`;

      portfolioItem.style.backgroundImage =
      `url(${item.image})`;

      const portfolioInfo =
      document.createElement("div");

      portfolioInfo.className =
      "portfolio-info";

      portfolioInfo.innerHTML = `
        <p class="portfolio-category">
          ${item.category.toUpperCase()}
        </p>

        <a href="#"
           class="view-more">
           View Details
        </a>
      `;

      portfolioItem.appendChild(portfolioInfo);

      portfolioGrid.appendChild(portfolioItem);

    });

  }

  /* =========================
     GALLERY IMAGES
  ========================= */

  const galleryWrappers =
  document.querySelectorAll(".luxury-gallery-wrapper");

  const beautyImages = [

    "assets/1.jpeg",
    "assets/2.jpeg",
    "assets/3.jpeg",
    "assets/4.jpeg",
    "assets/5.jpeg",
    "assets/6.jpeg",
    "assets/7.jpeg",
    "assets/8.jpeg",
    "assets/9.jpeg"

  ];

  galleryWrappers.forEach((wrapper) => {

    beautyImages.forEach((imageUrl) => {

      const card =
      document.createElement("div");

      card.className =
      "luxury-gallery-card";

      const img =
      document.createElement("img");

      img.src = imageUrl;

      img.className =
      "luxury-gallery-image";

      card.appendChild(img);

      wrapper.appendChild(card);

    });

  });

  /* =========================
     COUNTER ANIMATION
  ========================= */

  const counters =
  document.querySelectorAll(".counter");

  counters.forEach((counter) => {

    const updateCounter = () => {

      const target =
      Number(counter.getAttribute("data-target"));

      const count =
      Number(counter.innerText);

      const increment =
      Math.ceil(target / 100);

      if(count < target){

        counter.innerText =
        count + increment;

        setTimeout(updateCounter, 20);

      }
      else{

        counter.innerText =
        target + "+";

      }

    };

    updateCounter();

  });

  /* =========================
     CONTACT FORM
  ========================= */

  const contactForm =
  document.querySelector(".contact-form");

  if(contactForm){

    contactForm.addEventListener("submit",
    function (e) {

      e.preventDefault();

      const nameInput =
      this.querySelector('input[type="text"]');

      const emailInput =
      this.querySelector('input[type="email"]');

      const messageInput =
      this.querySelector("textarea");

      if(
        !nameInput.value ||
        !emailInput.value ||
        !messageInput.value
      ){

        alert("Please fill in all fields");

        return;

      }

      if(!emailInput.value.includes("@")){

        alert("Please enter a valid email address");

        return;

      }

      alert("Message sent successfully!");

      this.reset();

    });

  }

});