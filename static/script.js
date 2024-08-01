document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation for elements
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    // Button click animation
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            button.classList.add('btn-clicked');
            setTimeout(() => {
                button.classList.remove('btn-clicked');
            }, 300);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.hero');
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Image hover effect
    document.querySelectorAll('.feature img, .step img').forEach(img => {
        img.addEventListener('mouseover', function() {
            img.classList.add('img-hover');
        });
        img.addEventListener('mouseout', function() {
            img.classList.remove('img-hover');
        });
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('revealed');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    revealElements.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Handle Contact Us form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Example form submission logic
        const formData = new FormData(this);
        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            // Optionally clear the form
            document.getElementById('contactForm').reset();
        })
        .catch(error => {
            alert('Error sending message.');
            console.error('Error:', error);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const loginRegisterModal = document.getElementById('loginRegisterModal');
    const closeModal = document.querySelector('.modal .close');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');

    loginRegisterBtn.addEventListener('click', () => {
        loginRegisterModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        loginRegisterModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginRegisterModal) {
            loginRegisterModal.style.display = 'none';
        }
    });

    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'flex';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'flex';
    });
});