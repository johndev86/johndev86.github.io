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

    //Fade in/out project boxes
    var projectBoxes = document.querySelectorAll('.project-box');

    var windowBottom = window.scrollY + window.innerHeight;
    projectBoxes.forEach(function(e) {
        /* Check the location of each desired element */
        var objectBottom = e.offsetTop;
        
        /* If the element is within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            e.classList.add('fadeInRight');
        } else {
            e.classList.remove('fadeInRight');
        }
    });

};

window.onload = function () {
    var date = new Date();
    document.querySelector('#copyright').innerHTML = '&copy; ' + date.getFullYear() + ' John Lee';
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}