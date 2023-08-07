burger = document.querySelector('.burger')
Navbar = document.querySelector('.Navbar')
rightnav = document.querySelector('.rightnav')
first = document.querySelector('.first')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-none-resp');
    first.classList.toggle('v-none-resp');
    Navbar.classList.toggle('h-nav-resp');
})