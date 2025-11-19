// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Buy button functionality
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const title = product.querySelector('.product-title').textContent;
        const price = product.querySelector('.product-price').textContent;
        
        alert(`Товар "${title}" додано до замовлення!\nЦіна: ${price}\nНаш менеджер зв'яжеться з вами.`);
        
        // Додайте тут логіку для кошика покупок
    });
});

// Додайте інші функції JavaScript тут
