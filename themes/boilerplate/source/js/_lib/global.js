/**
 *
 * NAVBAR BURGER MENU ACTION
 *
 **/
function initNavbarBurgerMenus() {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(function(navbarBurger) {
      navbarBurger.addEventListener('click', function() {
        const target = navbarBurger.dataset.target
        const navbar = document.getElementById(target)

        navbarBurger.classList.toggle('is-active')
        navbar.classList.toggle('is-active')
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initNavbarBurgerMenus();
})
