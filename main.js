// 1. Initialize Icons
lucide.createIcons();

// 2. Mobile Menu Logic
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('menuBtn');
    const icon = menuBtn.querySelector('i');
    
    navLinks.classList.toggle('active');
    
    const isOpened = navLinks.classList.contains('active');
    icon.setAttribute('data-lucide', isOpened ? 'x' : 'menu');
    lucide.createIcons();
}

// 3. Form Handling
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.innerText = 'Sending...';
    
    setTimeout(() => {
        contactForm.classList.add('hidden');
        feedback.classList.remove('hidden');
    }, 1500);
});

// 4. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Apply to all cards
document.querySelectorAll('.project-card, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = '0.7s ease-out';
    observer.observe(el);
});
