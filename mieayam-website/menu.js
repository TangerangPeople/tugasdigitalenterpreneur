// Menu filtering functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.dataset.category;

        menuItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                // Add fade-in animation
                item.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Add hover effects to menu items
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth scroll to menu section on page load if hash is #menu
if (window.location.hash === '#menu') {
    setTimeout(() => {
        document.querySelector('#menu').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}
