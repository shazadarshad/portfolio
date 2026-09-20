// ===== Portfolio JavaScript =====
// Built by Shazad Arshad

// --- Dark / Light theme toggle ---
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("use");
const root = document.documentElement;

// Load saved theme (default is dark)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.setAttribute("data-theme", "light");
  themeIcon.setAttribute("href", "#i-sun");
}

themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  if (isLight) {
    root.removeAttribute("data-theme");
    themeIcon.setAttribute("href", "#i-moon");
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
    themeIcon.setAttribute("href", "#i-sun");
    localStorage.setItem("theme", "light");
  }
});

// --- Mobile menu toggle ---
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close the mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// --- Contact form (front-end validation + fake submit) ---
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple email check
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.className = "form-status error";
    return;
  }

  if (!emailOk) {
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.className = "form-status error";
    return;
  }

  // Since this is a static site, we just show a success message.
  // (Later this can be connected to a real email service like Formspree.)
  formStatus.textContent = "Thanks " + name + "! Your message has been noted. 🎉";
  formStatus.className = "form-status success";
  contactForm.reset();
});

// --- Set current year in footer ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Back to top button ---
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Scroll reveal animation ---
// Add the "reveal" class to sections, then reveal them as they scroll in.
const sections = document.querySelectorAll(".section");
sections.forEach((section) => section.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // reveal once
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));
