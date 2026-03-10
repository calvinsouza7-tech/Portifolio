// ============================================
// Main JavaScript - Site Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize language detection
    if (window.detectCountryAndSetLanguage) {
        window.detectCountryAndSetLanguage();
    }

    // Mobile Menu Toggle
    initMobileMenu();

    // Language Selector
    initLanguageSelector();

    // Template Filters
    initTemplateFilters();

    // Smooth Scroll
    initSmoothScroll();

    // Contact Form
    initContactForm();

    // Navbar scroll effect
    initNavbarScroll();
});

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Language Selector
function initLanguageSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function () {
            langDropdown.classList.remove('active');
        });

        // Handle language selection
        langDropdown.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', function () {
                const lang = this.getAttribute('data-lang');
                if (window.setLanguage) {
                    window.setLanguage(lang);
                }
                langDropdown.classList.remove('active');
            });
        });
    }
}

// Template Filters
function initTemplateFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const templateCards = document.querySelectorAll('.template-card');

    if (filterBtns.length > 0 && templateCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                // Filter templates
                templateCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        const category = card.getAttribute('data-category');
                        if (category === filter) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeInUp 0.5s ease forwards';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Create WhatsApp message
            const message = `Olá! Gostaria de saber mais sobre o template de ${data.template || 'interesse'}.\n\nNome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone || 'Não informado'}\nMensagem: ${data.message || 'Sem mensagem'}`;

            // Encode message for WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = '5511999999999'; // Replace with actual number

            // Open WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

            // Show success message
            alert('Mensagem criada! Você será redirecionado para o WhatsApp para enviar sua mensagem.');

            // Reset form
            form.reset();
        });
    }
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
            }
        });
    }
}

// Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}
