document.addEventListener("DOMContentLoaded", () => {
  showSection('ana');
});

function showSection(id) {
  // Tüm bölümleri gizle
  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
  });

  // Seçilen bölümü göster
  const selectedSection = document.getElementById(id);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  }

  const navBar = document.querySelector(".nav");
  const mainButtons = document.querySelector(".main-buttons");

  // Ana sayfadaysa üst menü gizli, ana butonlar açık
  if (id === "ana") {
    navBar.classList.add("hidden");
    mainButtons.classList.remove("hidden");
  } else {
    navBar.classList.remove("hidden");
    mainButtons.classList.add("hidden");

    // Aktif sayfanın butonunu gizle
    document.querySelectorAll(".nav button").forEach(btn => {
      if (btn.dataset.target === id) {
        btn.classList.add("hidden");
      } else {
        btn.classList.remove("hidden");
      }
    });
  }
}
