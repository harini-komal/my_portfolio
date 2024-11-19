// Smooth scroll effect for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

        });
    });
});

// Scroll reveal animation for sections
const sections = document.querySelectorAll('section');
const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

function to_project1(){
    window.location.replace(" https://github.com/harini-komal/Assignments");  
}

window.addEventListener('scroll', revealSection);
revealSection(); // Initial check for visibility