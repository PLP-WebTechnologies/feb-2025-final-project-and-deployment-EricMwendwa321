// Simple contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "orange";
    } else {
      formMessage.textContent = "Message sent successfully! (This is a demo.)";
      formMessage.style.color = "lightgreen";
      form.reset();
    }
  });
});
