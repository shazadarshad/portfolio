// ===== Portfolio JavaScript =====
// Built by Shazad Arshad

// --- Dark / Light theme toggle ---
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("use");
const root = document.documentElement;

// Load saved theme (default is the bright / light theme)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  themeIcon.setAttribute("href", "#i-sun");
} else {
  // Light by default: show the moon (click to switch to dark).
  themeIcon.setAttribute("href", "#i-moon");
}

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    themeIcon.setAttribute("href", "#i-moon");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    themeIcon.setAttribute("href", "#i-sun");
    localStorage.setItem("theme", "dark");
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

contactForm.addEventListener("submit", async (e) => {
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

  const submitBtn = contactForm.querySelector("button[type='submit']");

  formStatus.textContent = "Sending…";
  formStatus.className = "form-status";
  if (submitBtn) submitBtn.disabled = true;

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.textContent = "Thanks " + name + "! Your message has been sent. 🎉";
      formStatus.className = "form-status success";
      contactForm.reset();
    } else {
      formStatus.textContent = "Sorry, something went wrong. Please email me directly.";
      formStatus.className = "form-status error";
    }
  } catch {
    formStatus.textContent = "Network error. Please check your connection and try again.";
    formStatus.className = "form-status error";
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
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
