// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach((element) => revealObserver.observe(element));

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuPanel = document.getElementById('menuPanel');
const mobileLinks = document.querySelectorAll('.mobile-link');
let menuOpen = false;

function openMenu() {
    menuOpen = true;
    mobileMenu.classList.remove('pointer-events-none');
    menuOverlay.classList.remove('opacity-0');
    menuOverlay.classList.add('opacity-100');
    menuPanel.classList.remove('translate-x-full');
    menuPanel.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuOpen = false;
    menuOverlay.classList.remove('opacity-100');
    menuOverlay.classList.add('opacity-0');
    menuPanel.classList.remove('translate-x-0');
    menuPanel.classList.add('translate-x-full');
    document.body.style.overflow = '';
    setTimeout(() => {
        mobileMenu.classList.add('pointer-events-none');
    }, 400);
}

menuBtn.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
menuOverlay.addEventListener('click', closeMenu);
mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 20 ? '0 1px 3px rgba(0,0,0,0.05)' : 'none';
});

// Newsletter form
const form = document.getElementById('newsletterForm');
const toast = document.getElementById('toast');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    toast.classList.add('show');
    form.reset();

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
});
