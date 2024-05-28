const navBar = document.getElementById('navBar');
const toggleHamburger = document.getElementById('hamburgerButton');
toggleHamburger.addEventListener('click', () => {
    console.log("clicked");
    navBar.classList.toggle('active');
});