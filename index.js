const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');
const topScrollButton = document.querySelector('.upbutton');

document.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
        topScrollButton.classList.add("active")

    } else {
        document.querySelector('.header').classList.remove("active");
        topScrollButton.classList.remove("active")

    }
};
document.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove("active");
    }
};


menuButton.addEventListener('click', (e) => {
    navbar.classList.toggle('show');

})

topScrollButton.addEventListener("click", () => {
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})