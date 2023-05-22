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



// Login from
const formOpenBtn = document.querySelector('.loginBtn');
const loginsignup = document.querySelector(".loginsignup");
const closeBtn = document.querySelector('.form_close')
const formContainer = document.querySelector(".form_container");
const signupBtn = document.querySelector("#signup");
const pwShowHide = document.querySelectorAll('.pw_hide');
const loginBtn = document.querySelector('#login');
formOpenBtn.addEventListener('click', () => {
    navbar.classList.remove('show');
    loginsignup.classList.add("show")

})



closeBtn.addEventListener('click', () => loginsignup.classList.remove("show"))

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
})


loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active")
})

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye")
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash")
        }
    })
})
