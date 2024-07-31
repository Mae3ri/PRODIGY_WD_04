
/* typedjs.animation */
var typed = new Typed('#element', {
    strings: ['Crafting sleek', 'responsive designs', 'and seamless user', 'experiences is', 'my jam.'],
    typeSpeed: 50,
    loop: true
});




/* read-more-read-less */
document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const aboutMeContent = document.getElementById("aboutMeContent");

    readMoreBtn.addEventListener("click", function () {
        if (aboutMeContent.classList.contains("expanded")) {
            aboutMeContent.classList.remove("expanded");
            readMoreBtn.textContent = "Read More";
        } else {
            aboutMeContent.classList.add("expanded");
            readMoreBtn.textContent = "Read Less";
        }
    });
});


/* basic-project-toggle */
document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector('.basic-projects-toggle');
    const basicProjects = document.querySelector('.basic-projects');

    // Ensure the basic projects list is hidden on page load
    basicProjects.style.display = 'none';

    toggle.addEventListener('click', function() {
        const isHidden = basicProjects.style.display === 'none';
        basicProjects.style.display = isHidden ? 'block' : 'none';
        toggle.classList.toggle('active', isHidden);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const scrollUpButton = document.getElementById('scrollUpButton');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll up button functionality
    scrollUpButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scroll for navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 50; // Adjust this value to match the height of your fixed navbar

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});

 
