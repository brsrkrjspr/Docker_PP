function showProfile(type) {
    const profileCards = document.querySelectorAll('.profile-card');
    const navTabs = document.querySelectorAll('.nav-tab');
    
    // Update active tab
    navTabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide profiles
    profileCards.forEach(card => {
        if (type === 'all') {
            card.style.display = 'block';
        } else if (type === 'jasper' && card.dataset.profile === 'jasper') {
            card.style.display = 'block';
        } else if (type === 'joshua' && card.dataset.profile === 'joshua') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Adjust grid layout for single profile view
    const container = document.getElementById('profilesContainer');
    if (type === 'jasper' || type === 'joshua') {
        container.style.gridTemplateColumns = '1fr';
        container.style.maxWidth = '600px';
        container.style.margin = '0 auto';
    } else {
        container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(500px, 1fr))';
        container.style.maxWidth = 'none';
        container.style.margin = '0';
    }
}

// Add smooth scroll animation when switching profiles
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            setTimeout(() => {
                document.querySelector('.profiles-container').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        });
    });
});

// Add loading animation effect
document.addEventListener('DOMContentLoaded', function() {
    const profileCards = document.querySelectorAll('.profile-card');
    
    profileCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});