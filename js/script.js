// Set active navigation link
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNav();
});

function updateActiveNav() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Smooth transitions between pages
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Handle interest card clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.interest-card')) {
        // Card click animation
        const card = e.target.closest('.interest-card');
        card.style.transition = 'transform 0.3s ease';
    }
});

// Scroll to top button functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll to top button when user scrolls down
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn && window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else if (scrollTopBtn) {
        scrollTopBtn.style.display = 'none';
    }
});
