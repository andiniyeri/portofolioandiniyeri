
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Membuka dan menutup menu di layar HP
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah salah satu tautan ditekan
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
    menuToggle.textContent = "☰";
  });
});

// Menampilkan tahun saat ini secara otomatis
document.getElementById("tahun").textContent =
  new Date().getFullYear();
