window.onscroll = function() {
    stickyHeader();
    closeMenuOnScroll();
};

var header = document.querySelector("nav");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Close the menu when scrolling
function closeMenuOnScroll() {
    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
    }
}

// Toggle menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    slide.appendChild(items[0]); // Move the first item to the end
});
