function showSection(id) {
  // Tüm bölümleri gizle
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));

  // Tıklanan bölümü göster
  document.getElementById(id).classList.remove('hidden');

  // Ana sayfa mı kontrolü
  const isHome = id === 'ana';

  // Üst menüyü sadece ana sayfa dışında göster
  document.getElementById('topMenu').style.display = isHome ? 'none' : 'flex';

  // Ana sayfa butonlarını (mavi) sadece ana sayfada göster
  document.getElementById('homeButtons').style.display = isHome ? 'flex' : 'none';
}
