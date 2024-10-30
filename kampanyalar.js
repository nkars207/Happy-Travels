// Favori resimlerin URL'lerini saklamak için bir dizi
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Favorilere ekleme işlemi
function toggleFavorite(element) {
    const imageUrl = element.parentElement.querySelector('img').src;

    if (element.classList.contains("favorited")) {
        element.textContent = "🤍"; // Boş kalp
        // Favorilerden çıkar
        favorites = favorites.filter(fav => fav !== imageUrl);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
        element.textContent = "❤️"; // Dolu kalp
        // Favorilere ekle
        favorites.push(imageUrl);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        // Uyarı mesajı
        showNotification("Kampanyamızı favoriye aldınız! Beğendiğiniz kampanyalarımızı ❤️'dan bakabilirsiniz.");
    }
    element.classList.toggle("favorited"); // Favori durumu değiştir
}

// Favoriler sayfasına git
function openFavorites() {
    window.location.href = 'favoriler.html'; // Favoriler sayfasının adı
}

// Bildirim göster
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // 3 saniye sonra gizle
}

// Sayfa yüklendiğinde favorileri göster
window.onload = function() {
    // Diğer başlangıç işlemleri
};


// Modal açma fonksiyonu
function openModal(element) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Modali göster
    modalImg.src = element.querySelector('img').src; // Resmi modalda göster
    captionText.innerHTML = element.querySelector('img').alt; // Resim alt yazısını göster
}

// Modal kapatma fonksiyonu
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Modali gizle
}

