// SHOW Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

const linkActive = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(n => n.addEventListener('click', linkActive));

// Scroll to section

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        console.log()

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Header Background

const scrollHeader = () => {
    const header = document.getElementById('header');

    if(this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >= 560) {
        scrollTop.classList.add('scroll-top');
    } else {
        scrollTop.classList.remove('scroll-top');
    }
}

window.addEventListener('scroll', scrollTop);