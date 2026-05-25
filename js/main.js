document.addEventListener("DOMContentLoaded", () => {

/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon =
        menuToggle.querySelector("i");

        icon.classList.toggle("fa-bars");

        icon.classList.toggle("fa-times");

    });

}

/* =========================
   SMOOTH SCROLL
========================= */

document.addEventListener("click", (e) => {

    const anchor =
    e.target.closest('a[href^="#"]');

    if(!anchor) return;

    const targetId =
    anchor.getAttribute("href");

    if(targetId === "#") return;

    const target =
    document.querySelector(targetId);

    if(target){

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    }

});


/* =========================
   COUNTER ANIMATION
   (ONLY WHEN VISIBLE)
========================= */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let count = 0;

            const increment =
            Math.ceil(target / 80);

            const updateCounter = () => {

                count += increment;

                if(count < target){

                    counter.innerText = count;

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach((counter)=>{

    counterObserver.observe(counter);

});


/* =========================
   GALLERY POPUP
========================= */

const popup =
document.getElementById("queenbeePopup");

const popupImage =
document.getElementById("queenbeePopupImage");

const closeBtn =
document.getElementById("queenbeeClose");

/* EVENT DELEGATION = FAST */

document.addEventListener("click",(e)=>{

    const image =
    e.target.closest(".queenbee-img");

    if(image){

        popup.style.display = "flex";

        popupImage.src = image.src;

    }

});

/* CLOSE */

if(closeBtn){

    closeBtn.addEventListener("click",()=>{

        popup.style.display = "none";

    });

}

/* OUTSIDE CLICK */

if(popup){

    popup.addEventListener("click",(e)=>{

        if(e.target === popup){

            popup.style.display = "none";

        }

    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name =
        contactForm.querySelector('input[type="text"]').value.trim();

        const email =
        contactForm.querySelector('input[type="email"]').value.trim();

        const message =
        contactForm.querySelector("textarea").value.trim();

        if(!name || !email || !message){

            alert("Please fill all fields");

            return;

        }

        if(!email.includes("@")){

            alert("Enter valid email");

            return;

        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}

});