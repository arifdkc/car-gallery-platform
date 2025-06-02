const cardactive = document.querySelectorAll('.faq-card');

cardactive.forEach(card => {
    card.addEventListener('click', function() {
        // Tüm kartların açık durumunu kapat
        cardactive.forEach(c => {
            if (c !== card) {
                c.classList.remove('active');
            }
        });
        
        // Tıklanan kartın durumunu değiştir
        card.classList.toggle('active');
    });
});