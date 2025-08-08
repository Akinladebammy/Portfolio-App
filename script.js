// Handle logo fallback
document.addEventListener('DOMContentLoaded', function() {
    const logoImages = document.querySelectorAll('.logo img');
    
    logoImages.forEach(function(img) {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'block';
        });
        
        // Check if image is already failed to load
        if (!img.complete || img.naturalWidth === 0) {
            img.style.display = 'none';
            img.nextElementSibling.style.display = 'block';
        }
    });
});

// Toggle hamburger menu
function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    
    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
}