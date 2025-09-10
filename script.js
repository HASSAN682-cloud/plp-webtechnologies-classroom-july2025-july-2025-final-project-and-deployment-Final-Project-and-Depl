// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlides() {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

if (slides.length) showSlides();

// Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email.includes("@") && message.length > 5) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      form.reset();
    } else {
      formMessage.textContent = "Please fill all fields correctly.";
      formMessage.style.color = "red";
    }
  });
}
