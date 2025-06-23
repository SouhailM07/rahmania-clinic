let menu_list = document.querySelector("#menu-list")
menu_list.addEventListener("click", (e) => {
    menu_list.classList.toggle("visually-hidden")
})
let menu_btn = document.querySelector("#menu-btn").addEventListener("click", () => {
    menu_list.classList.toggle("visually-hidden")
})
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

