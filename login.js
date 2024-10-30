// Giriş formu doğrulama
function validateLoginForm() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // E-posta kontrolü
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Geçerli bir e-posta adresi girin!");
        return false;
    }

    // Şifre kontrolü
    if (password.length < 6) {
        alert("Şifre en az 6 karakter uzunluğunda olmalı.");
        return false;
    }

    return true;
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfa yenilenmesinin önüne geç
    if (validateLoginForm()) {
        alert("Giriş başarılı!");
        // Giriş işlemleri burada yapılabilir
    }
});
