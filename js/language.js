// ============================================
// Internationalization System
// ============================================

const translations = {
    'pt-BR': {
        // Navigation
        'nav.home': 'Início',
        'nav.templates': 'Templates',
        'nav.services': 'Serviços',
        'nav.contact': 'Contato',

        // Hero Section
        'hero.title': 'Sites Profissionais para Seu Negócio',
        'hero.subtitle': 'Criamos templates únicos e personalizados para diversos profissionais. Destaque-se no mercado com um site moderno e eficiente.',
        'hero.cta1': 'Ver Templates',
        'hero.cta2': 'Falar Conosco',
        'hero.stats.templates': 'Templates',
        'hero.stats.clients': 'Clientes',
        'hero.stats.satisfaction': 'Satisfação',

        // Templates Section
        'templates.title': 'Nossos Templates',
        'templates.subtitle': 'Explore nossa coleção de sites profissionais desenvolvidos especialmente para cada tipo de negócio.',
        'templates.view': 'Ver Template →',

        // Filters
        'filters.all': 'Todos',
        'filters.services': 'Serviços',
        'filters.health': 'Saúde',
        'filters.food': 'Alimentação',
        'filters.business': 'Negócios',

        // Template Details
        'templates.electrician.title': 'Eletricista',
        'templates.electrician.desc': 'Site profissional para eletricistas',
        'templates.solar.title': 'Painéis Solares',
        'templates.solar.desc': 'Energia solar para sua empresa',
        'templates.lawyer.title': 'Advogado',
        'templates.lawyer.desc': 'Escritório de advocacia',
        'templates.yoga.title': 'Professor de Yoga',
        'templates.yoga.desc': 'Aulas de yoga e meditação',
        'templates.trainer.title': 'Personal Trainer',
        'templates.trainer.desc': 'Treinos personalizados',
        'templates.dentist.title': 'Dentista',
        'templates.dentist.desc': 'Clínica odontológica',
        'templates.vet.title': 'Veterinário',
        'templates.vet.desc': 'Clínica veterinária',
        'templates.restaurant.title': 'Restaurante',
        'templates.restaurant.desc': 'Cardápio digital com pedidos',
        'templates.salon.title': 'Salão de Beleza',
        'templates.salon.desc': 'Salão de beleza e cabeleireiro',
        'templates.architect.title': 'Arquiteto',
        'templates.architect.desc': 'Portfólio de arquitetura',
        'templates.photographer.title': 'Fotógrafo',
        'templates.photographer.desc': 'Portfólio fotográfico',
        'templates.accountant.title': 'Contador',
        'templates.accountant.desc': 'Escritório contábil',
        'templates.driving.title': 'Autoescola',
        'templates.driving.desc': 'Escola de trânsito',
        'templates.clinic.title': 'Clínica Médica',
        'templates.clinic.desc': 'Clínica médica geral',
        'templates.travel.title': 'Agência de Viagens',
        'templates.travel.desc': 'Agência de turismo',

        // Services Section
        'services.title': 'Nossos Serviços',
        'services.subtitle': 'Oferecemos soluções completas para sua presença digital.',
        'services.design.title': 'Design Único',
        'services.design.desc': 'Criamos designs exclusivos que representam a identidade da sua marca.',
        'services.responsive.title': 'Responsivo',
        'services.responsive.desc': 'Seu site funciona perfeitamente em todos os dispositivos.',
        'services.fast.title': 'Performance',
        'services.fast.desc': 'Sites rápidos e otimizados para melhores resultados.',
        'services.seo.title': 'SEO',
        'services.seo.desc': 'Otimizado para buscas Google e outros mecanismos.',

        // Contact Section
        'contact.title': 'Fale Conosco',
        'contact.subtitle': 'Pronto para ter um site profissional? Entre em contato!',
        'contact.form.name': 'Nome',
        'contact.form.email': 'E-mail',
        'contact.form.phone': 'Telefone',
        'contact.form.template': 'Template de Interesse',
        'contact.form.select': 'Selecione...',
        'contact.form.message': 'Mensagem',
        'contact.form.submit': 'Enviar Mensagem',
        'contact.form.other': 'Outro',

        // Footer
        'footer.tagline': 'Criando presença digital para negócios de sucesso.',
        'footer.links': 'Links Rápidos',
        'footer.social': 'Redes Sociais',
        'footer.rights': 'Todos os direitos reservados.',
    },

    'en-US': {
        // Navigation
        'nav.home': 'Home',
        'nav.templates': 'Templates',
        'nav.services': 'Services',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.title': 'Professional Websites for Your Business',
        'hero.subtitle': 'We create unique and customized templates for various professionals. Stand out in the market with a modern and efficient website.',
        'hero.cta1': 'View Templates',
        'hero.cta2': 'Contact Us',
        'hero.stats.templates': 'Templates',
        'hero.stats.clients': 'Clients',
        'hero.stats.satisfaction': 'Satisfaction',

        // Templates Section
        'templates.title': 'Our Templates',
        'templates.subtitle': 'Explore our collection of professional websites developed especially for each type of business.',
        'templates.view': 'View Template →',

        // Filters
        'filters.all': 'All',
        'filters.services': 'Services',
        'filters.health': 'Health',
        'filters.food': 'Food',
        'filters.business': 'Business',

        // Template Details
        'templates.electrician.title': 'Electrician',
        'templates.electrician.desc': 'Professional website for electricians',
        'templates.solar.title': 'Solar Panels',
        'templates.solar.desc': 'Solar energy for your company',
        'templates.lawyer.title': 'Lawyer',
        'templates.lawyer.desc': 'Law firm',
        'templates.yoga.title': 'Yoga Teacher',
        'templates.yoga.desc': 'Yoga and meditation classes',
        'templates.trainer.title': 'Personal Trainer',
        'templates.trainer.desc': 'Personalized workouts',
        'templates.dentist.title': 'Dentist',
        'templates.dentist.desc': 'Dental clinic',
        'templates.vet.title': 'Veterinarian',
        'templates.vet.desc': 'Veterinary clinic',
        'templates.restaurant.title': 'Restaurant',
        'templates.restaurant.desc': 'Digital menu with orders',
        'templates.salon.title': 'Beauty Salon',
        'templates.salon.desc': 'Beauty salon and hairdresser',
        'templates.architect.title': 'Architect',
        'templates.architect.desc': 'Architecture portfolio',
        'templates.photographer.title': 'Photographer',
        'templates.photographer.desc': 'Photography portfolio',
        'templates.accountant.title': 'Accountant',
        'templates.accountant.desc': 'Accounting firm',
        'templates.driving.title': 'Driving School',
        'templates.driving.desc': 'Traffic school',
        'templates.clinic.title': 'Medical Clinic',
        'templates.clinic.desc': 'General medical clinic',
        'templates.travel.title': 'Travel Agency',
        'templates.travel.desc': 'Tourism agency',

        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'We offer complete solutions for your digital presence.',
        'services.design.title': 'Unique Design',
        'services.design.desc': 'We create exclusive designs that represent your brand identity.',
        'services.responsive.title': 'Responsive',
        'services.responsive.desc': 'Your website works perfectly on all devices.',
        'services.fast.title': 'Performance',
        'services.fast.desc': 'Fast and optimized websites for better results.',
        'services.seo.title': 'SEO',
        'services.seo.desc': 'Optimized for Google and other search engines.',

        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Ready to have a professional website? Get in touch!',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone',
        'contact.form.template': 'Template of Interest',
        'contact.form.select': 'Select...',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        'contact.form.other': 'Other',

        // Footer
        'footer.tagline': 'Creating digital presence for successful businesses.',
        'footer.links': 'Quick Links',
        'footer.social': 'Social Media',
        'footer.rights': 'All rights reserved.',
    },

    'es-ES': {
        // Navigation
        'nav.home': 'Inicio',
        'nav.templates': 'Plantillas',
        'nav.services': 'Servicios',
        'nav.contact': 'Contacto',

        // Hero Section
        'hero.title': 'Sitios Web Profesionales para Tu Negocio',
        'hero.subtitle': 'Creamos plantillas únicas y personalizadas para diversos profesionales. Destaca en el mercado con un sitio web moderno y eficiente.',
        'hero.cta1': 'Ver Plantillas',
        'hero.cta2': 'Contáctanos',
        'hero.stats.templates': 'Plantillas',
        'hero.stats.clients': 'Clientes',
        'hero.stats.satisfaction': 'Satisfacción',

        // Templates Section
        'templates.title': 'Nuestras Plantillas',
        'templates.subtitle': 'Explora nuestra colección de sitios web profesionales desarrollados especialmente para cada tipo de negocio.',
        'templates.view': 'Ver Plantilla →',

        // Filters
        'filters.all': 'Todos',
        'filters.services': 'Servicios',
        'filters.health': 'Salud',
        'filters.food': 'Alimentación',
        'filters.business': 'Negocios',

        // Template Details
        'templates.electrician.title': 'Electricista',
        'templates.electrician.desc': 'Sitio web profesional para electricistas',
        'templates.solar.title': 'Paneles Solares',
        'templates.solar.desc': 'Energía solar para tu empresa',
        'templates.lawyer.title': 'Abogado',
        'templates.lawyer.desc': 'Despacho de abogados',
        'templates.yoga.title': 'Profesor de Yoga',
        'templates.yoga.desc': 'Clases de yoga y meditación',
        'templates.trainer.title': 'Personal Trainer',
        'templates.trainer.desc': 'Entrenamientos personalizados',
        'templates.dentist.title': 'Dentista',
        'templates.dentist.desc': 'Clínica dental',
        'templates.vet.title': 'Veterinario',
        'templates.vet.desc': 'Clínica veterinaria',
        'templates.restaurant.title': 'Restaurante',
        'templates.restaurant.desc': 'Menú digital con pedidos',
        'templates.salon.title': 'Salón de Belleza',
        'templates.salon.desc': 'Salón de belleza y peluquería',
        'templates.architect.title': 'Arquitecto',
        'templates.architect.desc': 'Portafolio de arquitectura',
        'templates.photographer.title': 'Fotógrafo',
        'templates.photographer.desc': 'Portafolio fotográfico',
        'templates.accountant.title': 'Contador',
        'templates.accountant.desc': 'Despacho contable',
        'templates.driving.title': 'Autoescuela',
        'templates.driving.desc': 'Escuela de tráfico',
        'templates.clinic.title': 'Clínica Médica',
        'templates.clinic.desc': 'Clínica médica general',
        'templates.travel.title': 'Agencia de Viajes',
        'templates.travel.desc': 'Agencia de turismo',

        // Services Section
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Ofrecemos soluciones completas para tu presencia digital.',
        'services.design.title': 'Diseño Único',
        'services.design.desc': 'Creamos diseños exclusivos que representan la identidad de tu marca.',
        'services.responsive.title': 'Responsivo',
        'services.responsive.desc': 'Tu sitio web funciona perfectamente en todos los dispositivos.',
        'services.fast.title': 'Rendimiento',
        'services.fast.desc': 'Sitios web rápidos y optimizados para mejores resultados.',
        'services.seo.title': 'SEO',
        'services.seo.desc': 'Optimizado para Google y otros motores de búsqueda.',

        // Contact Section
        'contact.title': 'Contáctanos',
        'contact.subtitle': '¿Listo para tener un sitio web profesional? ¡Escríbenos!',
        'contact.form.name': 'Nombre',
        'contact.form.email': 'Correo electrónico',
        'contact.form.phone': 'Teléfono',
        'contact.form.template': 'Plantilla de Interés',
        'contact.form.select': 'Seleccionar...',
        'contact.form.message': 'Mensaje',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.form.other': 'Otro',

        // Footer
        'footer.tagline': 'Creando presencia digital para negocios exitosos.',
        'footer.links': 'Enlaces Rápidos',
        'footer.social': 'Redes Sociales',
        'footer.rights': 'Todos los derechos reservados.',
    }
};

// Country to Language mapping
const countryToLanguage = {
    'BR': 'pt-BR',
    'US': 'en-US',
    'GB': 'en-US',
    'CA': 'en-US',
    'AU': 'en-US',
    'ES': 'es-ES',
    'MX': 'es-ES',
    'AR': 'es-ES',
    'CO': 'es-ES',
    'CL': 'es-ES',
    'PE': 'es-ES',
    'UY': 'es-ES',
    'VE': 'es-ES',
    'EC': 'es-ES',
    'GT': 'es-ES',
    'CR': 'es-ES',
    'PA': 'es-ES',
    'DO': 'es-ES'
};

// Default language
let currentLanguage = 'pt-BR';

// Function to detect country and set language
async function detectCountryAndSetLanguage() {
    // Check if language is already set in URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');

    if (urlLang && translations[urlLang]) {
        setLanguage(urlLang);
        return;
    }

    // Check if language is saved in localStorage
    const savedLang = localStorage.getItem('siteLanguage');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
        return;
    }

    // Try to detect country from IP
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        if (data && data.country_code) {
            const detectedLang = countryToLanguage[data.country_code] || 'pt-BR';
            setLanguage(detectedLang);
            return;
        }
    } catch (error) {
        console.log('Could not detect country, using default language');
    }

    // Default to Portuguese (Brazil)
    setLanguage('pt-BR');
}

// Function to set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('siteLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language button text
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const langFlags = {
            'pt-BR': '🇧🇷 PT',
            'en-US': '🇺🇸 EN',
            'es-ES': '🇪🇸 ES'
        };
        langBtn.querySelector('.current-lang').textContent = langFlags[lang] || '🌐';
    }

    // Update URL without reloading
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
}

// Function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Export functions for global use
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.detectCountryAndSetLanguage = detectCountryAndSetLanguage;
