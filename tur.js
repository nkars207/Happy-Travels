// Geri sayım fonksiyonu
function initializeCountdown(id, endTime) {
    const countdownElement = document.getElementById(id);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}g ${hours}s ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Süre doldu!";
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Kampanya değişim fonksiyonu
let currentKampanyaIndex = 0;
const kampanyalar = document.querySelectorAll('.kampanya'); // Kampanyaları seç

function changeKampanya() {
    // Tüm kampanyaları gizle
    kampanyalar.forEach((kampanya, index) => {
        kampanya.style.display = 'none';
    });

    // Sıradaki kampanyayı göster
    kampanyalar[currentKampanyaIndex].style.display = 'block';

    // Geri sayımı başlat (her kampanya için farklı zaman)
    const endTime = new Date().getTime() + (60 * 24 * 60 * 60 * 1000); // 60 gün sonra
    initializeCountdown(`geri-sayim-${currentKampanyaIndex + 1}`, endTime);

    // Sıradaki kampanya index'ini artır
    currentKampanyaIndex = (currentKampanyaIndex + 1) % kampanyalar.length;
}

// İlk kampanyayı gösterecek ve her 3 saniyede bir değişecek şekilde başlatacak
changeKampanya(); // Sayfa yüklendiğinde ilk kampanyayı başlat
setInterval(changeKampanya, 3000); // 3 saniyede bir kampanyayı değiştir
