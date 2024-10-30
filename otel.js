// JavaScript kodları
document.addEventListener("DOMContentLoaded", function() {
    // Resim öğelerini seçiyoruz
    const resimItems = document.querySelectorAll(".resim-item");

    // Her bir resim için hover efekti ekliyoruz
    resimItems.forEach(function(item) {
        const image = item.querySelector("img");
        const ekstraBasliklar = item.querySelector(".ekstra-basliklar");

        // Hover başladığında resim koyulaşacak ve başlıklar görünecek
        item.addEventListener("mouseenter", function() {
            image.style.filter = "brightness(80%)"; // Resmin koyulaşması
            ekstraBasliklar.style.display = "block"; // Ekstra başlıkların görünmesi
        });

        // Hover bitince resim eski haline dönecek ve başlıklar gizlenecek
        item.addEventListener("mouseleave", function() {
            image.style.filter = "brightness(100%)"; // Resmin normal hale dönmesi
            ekstraBasliklar.style.display = "none"; // Ekstra başlıkların gizlenmesi
        });
    });
});
