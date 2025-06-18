function showSection(id) {
  // Tüm bölümleri gizle
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));

  // İsteneni göster
  document.getElementById(id).classList.remove('hidden');

  // Üst menüyü sadece ana sayfa haricinde göster
  const menu = document.getElementById('top-menu');
  if (id === 'ana') {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
}
