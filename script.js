// Sayfa yüklendiğinde ana ekranı göster
document.addEventListener("DOMContentLoaded", () => {
  showSection('ana');
});

// Bölümler arası geçişi yönet
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

  // Üst menü sadece 'ana' ekran dışında görünsün
  const navBar = document.querySelector(".nav");
  if (id === "ana") {
    navBar.classList.add("hidden");
  } else {
    navBar.classList.remove("hidden");
  }

  // Aktif olmayan butonları temizle
  document.querySelectorAll(".nav button").forEach(btn => {
    btn.classList.remove("active");
  });

  // Aktif butonu işaretle
  const activeButton = document.querySelector(`.nav button[data-target='${id}']`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
    }
