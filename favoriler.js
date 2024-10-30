// Sayfa yüklendiğinde favori resimleri yerleştirme
window.onload = function() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites');

    // Favori resimleri listeye ekle
    if (favorites.length > 0) {
        favorites.forEach(fav => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${fav}" alt="Favori Resim" style="width: 100px; height: auto;">`;
            favoritesList.appendChild(li);
        });
    } else {
        favoritesList.innerHTML = '<p>Henüz favori kampanyanız yok.</p>'; // Favori yoksa uyarı mesajı
    }
};

// Geri dönme fonksiyonu
function goBack() {
    window.location.href = 'kampanyalar.html'; // Kampanyalar sayfasına yönlendir
}


const scrollToTopButton = document.getElementById('scrollToTop');

// Scroll butonunu gösterme/ gizleme
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Favori kampanyalarını dinamik olarak ekleme
const favoriteGallery = document.getElementById('favoriteGallery');

// Örnek olarak, favori kampanya resimlerini buraya ekleyebilirsiniz.
const favorites = [
    {
        src: 'BankkartKampanya-2-1170x470-0306.jpg',
        alt: 'Resim 1'
    },
    {
        src: 'BankkartKampanya-1170x470-0104.jpg',
        alt: 'Resim 2'
    },
    // Diğer favori resimleri ekleyin
];

favorites.forEach(favorite => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.onclick = function() {
        openModal(this);
    };

    const img = document.createElement('img');
    img.src = favorite.src;
    img.alt = favorite.alt;

    imageContainer.appendChild(img);
    favoriteGallery.appendChild(imageContainer);
});

// Modal açma ve kapama
function openModal(element) {
    const img = element.querySelector('img');
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
