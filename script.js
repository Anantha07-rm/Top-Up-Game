// Menunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Logika Klik Tombol Top Up
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Ambil nama game dari elemen card terdekat
            const gameName = e.target.parentElement.querySelector('p').innerText;
            
            // Contoh interaksi sederhana
            alert(`Anda memilih untuk Top Up: ${gameName}\nSistem akan mengarahkan Anda ke halaman pembayaran.`);
        });
    });

    // 2. Fungsi Animasi Sederhana saat Scroll (Optional)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('nav');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#0f172a';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = '#1e293b';
            header.style.boxShadow = 'none';
        }
    });

});

/**
 * TIPS: Jika Anda ingin menambahkan fitur hitung harga otomatis,
 * Anda bisa menambahkan fungsi perkalian nominal di sini.
 */
function hitungHarga(jumlahDiamond) {
    const hargaPerDiamond = 300; // Contoh harga
    return jumlahDiamond * hargaPerDiamond;
}