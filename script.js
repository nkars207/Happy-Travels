const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const adContainer = document.getElementById("adContainer");
const ads = adContainer.getElementsByTagName("img");

let currentIndex = 0;

// Sağ kaydırma
function showNextAd() {
    if (currentIndex < ads.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Son reklama gelindiğinde başa döner
    }
    updateSlider();
}

// Sol kaydırma
function showPrevAd() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = ads.length - 1; // İlk reklama gelindiğinde son reklama döner
    }
    updateSlider();
}

// Slider'ı güncelle
function updateSlider() {
    const offset = -currentIndex * 100; // Yüzde 100 kaydırma
    adContainer.style.transform = `translateX(${offset}%)`;
}

// Olay dinleyicileri
prevButton.addEventListener("click", showPrevAd);
nextButton.addEventListener("click", showNextAd);

// İlk başta slider'ı güncelle
updateSlider();

// Otomatik geçiş için setInterval kullanımı
const autoSlideInterval = 3000; // 3 saniyede bir reklam değişecek (3000 milisaniye)
setInterval(showNextAd, autoSlideInterval);




