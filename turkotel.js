const otelVerileri = [
    { isim: "Bodrum Oteli", fiyat: 700, bolge: "bodrum", konaklama: "her_sey_dahil", img: "bodrum-1.webp" },
    { isim: "Belek Oteli", fiyat: 2100, bolge: "belek", konaklama: "oda_kahvalti", img: "belek-1.webp" },
    { isim: "Lara Kundu Oteli", fiyat: 5960, bolge: "lara", konaklama: "ultra_her_sey_dahil", img: "lara-1.webp" },
    { isim: "Kemer Oteli", fiyat: 1200, bolge: "kemer", konaklama: "yarim_pansiyon", img: "marmaris-1.webp" },
    { isim: "Alanya Oteli", fiyat: 980, bolge: "alanya", konaklama: "tam_pansiyon", img: "alanya-1.webp" },
    { isim: "Side Oteli", fiyat: 1680, bolge: "side", konaklama: "oda_kahvalti", img: "side-1.webp" },
    { isim: "Marmaris Oteli", fiyat: 1620, bolge: "marmaris", konaklama: "her_sey_dahil", img: "marmaris-1.webp" },
    { isim: "Fethiye Oteli", fiyat: 1700, bolge: "fethiye", konaklama: "yarim_pansiyon", img: "fethiye-1.webp" },
];

const otelGaleri = document.getElementById("otelGaleri");
const filtreleButonu = document.getElementById("filtrele");

function otelGoster(otelListesi) {
    otelGaleri.innerHTML = ""; // Galeriyi temizle
    otelListesi.forEach(otel => {
        const otelItem = document.createElement("div");
        otelItem.className = "otel-item";
        otelItem.innerHTML = `
            <img src="${otel.img}" alt="${otel.isim}">
            <p>${otel.isim}</p>
            <p>Fiyat: ${otel.fiyat} TL</p>
            <p>Bölge: ${otel.bolge}</p>
            <p>Konaklama: ${otel.konaklama.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</p>
        `;
        otelGaleri.appendChild(otelItem); // Galeriye otel item'ını ekle
    });
}

filtreleButonu.addEventListener("click", () => {
    const minFiyat = parseInt(document.getElementById("minFiyat").value) || 0;
    const maxFiyat = parseInt(document.getElementById("maxFiyat").value) || Infinity;
    const secilenBolge = document.getElementById("bolge").value;
    const secilenKonaklama = document.getElementById("konaklama").value;

    const filtrelenmisOteller = otelVerileri.filter(otel => {
        return otel.fiyat >= minFiyat &&
               otel.fiyat <= maxFiyat &&
               (secilenBolge === "" || otel.bolge === secilenBolge) &&
               (secilenKonaklama === "" || otel.konaklama === secilenKonaklama);
    });

    otelGoster(filtrelenmisOteller);
});

// Sayfa yüklendiğinde tüm otelleri göster
otelGoster(otelVerileri);


// Seçimleri temizle butonuna tıklandığında
document.getElementById('temizle').addEventListener('click', function() {
    document.getElementById('minFiyat').value = '';
    document.getElementById('maxFiyat').value = '';
    document.getElementById('bolge').value = '';
    document.getElementById('konaklama').value = '';

    // Galeriyi temizle
    document.getElementById('otelGaleri').innerHTML = '';
});

