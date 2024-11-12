function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
document.getElementById('homeButton').addEventListener('click', function() {
    scrollToSection('home');
});

document.getElementById('projectsButton').addEventListener('click', function() {
    scrollToSection('projects');
});

document.getElementById('connectButton').addEventListener('click', function() {
    scrollToSection('connect');
});