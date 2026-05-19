// ===== AUTH GUARD =====
// Protect all pages except login — redirect to login if not authenticated
if (typeof Auth !== 'undefined') {
    Auth.guard();
}

// ===== LOGOUT BUTTON =====
// If a logout button exists on the page, wire it up
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn && typeof Auth !== 'undefined') {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            Auth.logout();
            window.location.href = 'login.html';
        });
    }
});

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-active');
        mobileMenuBtn.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('mobile-active')) {
            navLinks.classList.remove('mobile-active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .category-card, .feature-item, .why-point, .trust-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// ===== WISHLIST TOGGLE =====
document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const svg = btn.querySelector('svg');
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            svg.style.fill = 'none';
            svg.style.stroke = '#888';
        } else {
            btn.classList.add('active');
            svg.style.fill = '#e8734a';
            svg.style.stroke = '#e8734a';
        }
    });
});

// ===== ADD TO CART ANIMATION =====
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.style.transform = 'scale(1.3)';
        btn.textContent = '✓';
        btn.style.background = '#4caf50';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
            btn.textContent = '+';
            btn.style.background = '';
        }, 1500);
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ===== PRODUCT CARD HOVER PARALLAX =====
document.querySelectorAll('.product-card .card-image').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const inner = card.querySelector('div');
        if (inner) {
            inner.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
        }
    });
    card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('div');
        if (inner) {
            inner.style.transform = 'rotateY(0) rotateX(0)';
        }
    });
});

// ===== FILTER BUTTON ACTIVE STATE =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
            btn.style.borderColor = '#2d3561';
            btn.style.background = '#f3eefa';
        } else {
            btn.style.borderColor = '#e0e0e0';
            btn.style.background = 'white';
        }
    });
});


// ===== PRODUCT CARD CLICK TO DETAIL =====
document.querySelectorAll('.product-card').forEach((card, index) => {
    const img = card.querySelector('.product-card-img img');
    if (img) {
        const match = img.src.match(/(\d)\.png/);
        if (match) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Don't navigate if clicking wishlist or add-to-cart
                if (e.target.closest('.wishlist-btn') || e.target.closest('.add-btn')) return;
                window.location.href = 'product-' + match[1] + '.html';
            });
        }
    }
});

// ===== PRODUCT PAGE: WEIGHT BUTTONS =====
document.querySelectorAll('.weight-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.weight-buttons').querySelectorAll('.weight-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ===== PRODUCT PAGE: QUANTITY CONTROLS =====
document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.closest('.qty-wrapper').querySelector('.qty-input');
        let val = parseInt(input.value) || 1;
        if (btn.classList.contains('minus')) val = Math.max(1, val - 1);
        if (btn.classList.contains('plus')) val = Math.min(10, val + 1);
        input.value = val;
    });
});

// ===== PRODUCT PAGE: TAB SWITCHING =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        btn.closest('.tabs-nav').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const target = document.getElementById('tab-' + tab);
        if (target) target.classList.add('active');
    });
});
