function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
}

function showOrderAlert() {
    window.location.href = "order.html";
}

document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-item').forEach(function (item) {
    observer.observe(item);
});