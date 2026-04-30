/* Toggling navbar visibility for smaller screens through menu icon */ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* Handling scroll event and updating the active navigation link based on the current section in view*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/* Toggling sticky class on header when scrolling down the page to add a sticky effect */    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/* Removing class "bx-x" from #menu-icon and class "active" from class "navbar" when clicking on a navigation link or scrolling */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
