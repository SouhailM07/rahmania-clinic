window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    // console.log('Scroll event triggered', navbar);
    const scrollPosition = window.scrollY;

    if (scrollPosition > 140) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});