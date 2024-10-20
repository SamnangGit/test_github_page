// // Theme Toggle Functionality
// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.querySelector('.theme-toggle');
//     const body = document.body;
    
//     // Check for saved theme preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         body.setAttribute('data-theme', savedTheme);
//         themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
//     }

//     themeToggle.addEventListener('click', () => {
//         const currentTheme = body.getAttribute('data-theme');
//         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
//         body.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
//         themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
//     });

//     // Active Navigation Link Highlighting
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.nav-link');

//     window.addEventListener('scroll', () => {
//         let current = '';
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (scrollY >= (sectionTop - sectionHeight / 3)) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').slice(1) === current) {
//                 link.classList.add('active');
//             }
//         });
//     });

//     // Contact Form Validation
//     const contactForm = document.getElementById('contact-form');
    
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;
        
//         // Basic validation
//         if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//             alert('Please fill in all fields');
//             return;
//         }
        
//         if (!isValidEmail(email)) {
//             alert('Please enter a valid email address');
//             return;
//         }
        
//         // Here you would typically send the form data to a server
//         alert('Thank you for your message! I will get back to you soon.');
//         contactForm.reset();
//     });
// });

// // Email validation helper function
// function isValidEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// // Smooth scroll for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Add animation on scroll
// const observerOptions = {
//     root: null,
//     threshold: 0.1,
//     rootMargin: "0px"
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//         }
//     });
// }, observerOptions);

// document.querySelectorAll('.timeline-item, .project-card, .skill-category').forEach(element => {
//     observer.observe(element);
// });


document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme === 'dark' ? 'dark-mode' : 'light-mode';
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        body.className = isDarkMode ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Email validation helper function
    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item, .project-card, .skill-category').forEach(element => {
        observer.observe(element);
    });

    // Initialize active link on page load
    updateActiveLink();
    
    // Handle initial theme based on system preference if no saved theme
    if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.className = prefersDark ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
        themeToggle.innerHTML = prefersDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
});