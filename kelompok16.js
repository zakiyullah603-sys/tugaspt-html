
const menu = [
  {
    id:1,
    nama:"Espresso",
    harga:"Rp 18.000",
    gambar:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200"
  },

  {
    id:2,
    nama:"Cappuccino",
    harga:"Rp 25.000",
    gambar:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200"
  },

  {
    id:3,
    nama:"Latte",
    harga:"Rp 23.000",
    gambar:"https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1200"
  },

  {
    id:4,
    nama:"Americano",
    harga:"Rp 20.000",
    gambar:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200"
  }
]
let susunanKartu = '';

menu.forEach(kopi => {
  susunanKartu += `
    <article class="menu-card">
      <img src="${kopi.gambar}" alt="${kopi.nama}">
      <div class="menu-info">
        <h3>${kopi.nama}</h3>
        <p><strong>${kopi.harga}</strong></p>
        <button onclick="alert('Anda memesan ${kopi.nama}')">
          Beli
        </button>
      </div>
    </article>
  `;
});