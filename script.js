const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = 'Light Mode';
    } else {
        themeToggle.innerText = 'Dark Mode';
    }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        navMenu.classList.remove('show'); 
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    if (nameValue === '' || emailValue === '' || messageValue === '') {
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = '#ffe6e6';
        formMessage.style.color = '#d9534f';
        formMessage.innerText = 'Vui lòng điền đầy đủ tất cả các trường bắt buộc.';
    } else {
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = '#e6ffe6';
        formMessage.style.color = '#5cb85c';
        formMessage.innerText = 'Gửi tin nhắn thành công!';
        contactForm.reset(); 
        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 3000);
    }
});

const yearSpan = document.getElementById('year');
yearSpan.innerText = new Date().getFullYear();