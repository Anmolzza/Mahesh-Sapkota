var menuBtn = document.getElementById('menu-btn');
var sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', function() {
    sideMenu.classList.toggle('open');
    var icon = menuBtn.querySelector('i');
    if (sideMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

var sideLinks = document.querySelectorAll('#side-menu a');
sideLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        sideMenu.classList.remove('open');
        var icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

var allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        var target = link.getAttribute('href');
        if (target === '#') return;
        var el = document.querySelector(target);
        if (el) {
            e.preventDefault();
            var navHeight = document.getElementById('navbar').offsetHeight;
            var pos = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    });
});

var revealEls = document.querySelectorAll('.reveal');

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(function(el) {
    observer.observe(el);
});
