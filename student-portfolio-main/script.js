const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent = "Thank you, " + name + "! Your message has been submitted.";
    contactForm.reset();
});
