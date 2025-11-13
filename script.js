function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });    
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('header');
    nav.classList.toggle('sticky', window.scrollY > 0);
});
