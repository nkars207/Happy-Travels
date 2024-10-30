// Form doğrulama fonksiyonu
function validateForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const acceptTerms = document.getElementById("accept-terms").checked;

    // E-posta kontrolü
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Geçerli bir e-posta adresi girin!");
        return false;
    }

    // Telefon numarası kontrolü (Türk telefon numarası formatı)
    const phonePattern = /^(\+90|0)?5\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert("Geçerli bir telefon numarası girin! Örnek: 05321234567 veya +905321234567");
        return false;
    }

    // Onay kutusu kontrolü
    if (!acceptTerms) {
        alert("Lütfen 'Genel İlkeleri ve Üyelik Sözleşmesini' onaylayın.");
        return false;
    }

    // Formun geçerli olduğu durumda true döndür
    return true;
}

// Gönder butonuna tıklanma işlemi
document.getElementById("submit-email").addEventListener("click", function(event) {
    event.preventDefault(); // Sayfa yenilenmesinin önüne geç
    if (validateForm()) {
        alert("Form başarıyla gönderildi!");
        // Formu gönder (veya burada formunuzu işleyecek kodu ekleyebilirsiniz)
    }
});

