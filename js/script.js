window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    var scrollBtn = document.querySelector('#scrollbtn');

    if (window.scrollY > 50) {
        if (!navbar.classList.contains('navscroll')) {
            navbar.classList.add('navscroll');
        }
        if (!scrollBtn.classList.contains('scrolled-show-btn')) {
            scrollBtn.classList.add('scrolled-show-btn');
        }   
    } else {
        if (navbar.classList.contains('navscroll')) {
            navbar.classList.remove('navscroll');
        }
        if (scrollBtn.classList.contains('scrolled-show-btn')) {
            scrollBtn.classList.remove('scrolled-show-btn');
        }
    }
};

window.onload = function () {
    var date = new Date();
    document.querySelector('#copyright').innerHTML = '&copy; ' + date.getFullYear() + ' John Lee';
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}