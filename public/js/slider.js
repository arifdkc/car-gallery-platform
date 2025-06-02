document.addEventListener('DOMContentLoaded', function() {
    // Slider fonksiyonları
    document.querySelectorAll('.slider-container').forEach(container => {
        const slider = container.querySelector('.slider');
        const slides = container.querySelectorAll('.slide');
        const prevBtn = container.querySelector('.slider-prev');
        const nextBtn = container.querySelector('.slider-next');
        const dotsContainer = container.querySelector('.slider-dots');
        
        let currentSlide = 0;
        const slideCount = slides.length;
        
        // Slider noktalarını oluştur
        if (slideCount > 1) {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('span');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                dot.dataset.slide = i;
                dotsContainer.appendChild(dot);
            }
        }
        
        const dots = container.querySelectorAll('.slider-dot');
        
        function goToSlide(index) {
            if (index < 0) index = slideCount - 1;
            if (index >= slideCount) index = 0;
            
            currentSlide = index;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Noktaları güncelle
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots.length > 0) dots[currentSlide].classList.add('active');
        }
        
        if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
        
        // Noktalara tıklama
        if (dots.length > 0) {
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    goToSlide(parseInt(this.dataset.slide));
                });
            });
        }
        
        // Otomatik slider
        if (slideCount > 1) {
            let slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
            
            // Fare üzerine gelince durdur
            container.addEventListener('mouseenter', () => clearInterval(slideInterval));
            container.addEventListener('mouseleave', () => {
                slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
            });
        }
    });
});