// ==================== Smooth Scroll para Links de Navegação ====================
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

// ==================== Efeito de Scroll no Header ====================
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== Animação de Entrada dos Cards ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.card, .servico-card, .contato-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==================== Botões de Ação ====================
const comprarButtons = document.querySelectorAll('.btn-primary, .btn-white');

comprarButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        // Verificar se é um botão de compra
        if (this.textContent.includes('Compre')) {
            e.preventDefault();
            // Redirecionar para WhatsApp ou loja
            window.open('https://wa.me/54996598842?text=Olá! Gostaria de fazer uma compra na NutriPet.', '_blank');
        }
    });
});

// ==================== Botão "Fale Conosco" ====================
const faleConoscoButtons = document.querySelectorAll('.btn-outline, .btn-large');

faleConoscoButtons.forEach(btn => {
    if (btn.textContent.includes('Fale') || btn.textContent.includes('Conosco')) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://wa.me/54996598842?text=Olá! Gostaria de mais informações sobre os produtos da NutriPet.', '_blank');
        });
    }
});

// ==================== Animação de Hover nos Cards ====================
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== Contador de Scroll ====================
window.addEventListener('scroll', function () {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Você pode usar isso para criar uma barra de progresso se desejar
    // console.log('Scroll: ' + scrollPercentage.toFixed(2) + '%');
});

// ==================== Validação de Links ====================
document.querySelectorAll('a[href^="https://wa.me"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function (e) {
        // Permitir que o link funcione normalmente
        console.log('Link de contato clicado:', this.href);
    });
});

// ==================== Efeito de Fade In ao Carregar a Página ====================
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ==================== Função para Abrir Seções ====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== Detecção de Dispositivo Móvel ====================
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamento em dispositivos móveis
if (isMobile()) {
    console.log('Acessando de um dispositivo móvel');
}

window.addEventListener('resize', function () {
    if (isMobile()) {
        // Ajustar layout para móvel
    }
});

// ==================== Efeito de Ripple nos Botões ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ==================== Inicialização ====================
console.log('Landing Page NutriPet carregada com sucesso!');

