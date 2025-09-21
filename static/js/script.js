// Hamburger menu functionality
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const headerNav = document.getElementById('header-nav');
        const headerButtons = document.getElementById('header-buttons');

        hamburgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            headerNav.classList.toggle('active');
            headerButtons.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.header-nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                headerNav.classList.remove('active');
                headerButtons.classList.remove('active');
            });
        });

        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                hamburgerMenu.classList.remove('active');
                headerNav.classList.remove('active');
                headerButtons.classList.remove('active');
            }
        });

        // FAQ Toggle Functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const answer = faqItem.querySelector('.faq-answer');
                const icon = question.querySelector('span:last-child');
                
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    icon.textContent = '+';
                } else {
                    // Close all other FAQ items
                    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
                    document.querySelectorAll('.faq-question span:last-child').forEach(i => i.textContent = '+');
                    
                    // Open current FAQ item
                    answer.style.display = 'block';
                    icon.textContent = '−';
                }
            });
        });

        // Smooth scrolling for navigation links
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

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            const button = this.querySelector('.newsletter-button');
            
            if (email) {
                button.textContent = 'Subscribed!';
                button.style.background = '#059669';
                button.style.color = '#ffffff';
                
                setTimeout(() => {
                    button.textContent = 'Subscribe Now';
                    button.style.background = '#ffffff';
                    button.style.color = '#2D8C7A';
                    this.querySelector('.newsletter-input').value = '';
                }, 3000);
            }
        });