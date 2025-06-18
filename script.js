function showSection(id) {
  // Tüm bölümleri gizle
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));

  // İstenen bölümü göster
  document.getElementById(id).classList.remove('hidden');

  // Ana sayfa dışına çıkıldığında üst menüyü göster
  document.getElementById('mainHeader').classList.remove('hidden');
}

function goHome() {
  // Tüm içerik bölümlerini gizle
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));

  // Ana sayfa içeriğini göster
  document.getElementById('home').classList.remove('hidden');

  // Ana sayfadaysak üst menüyü gizle
  document.getElementById('mainHeader').classList.add('hidden');
}

// Sayfa açıldığında sadece ana sayfa gözüksün
window.onload = function () {
  goHome();
};
