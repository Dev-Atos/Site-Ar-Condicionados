/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var emailTextArea = document.querySelector("#message")
var botaoEnviar = document.querySelector("#botaoEnviar")
var userName = document.querySelector("#nome")

emailTextArea.addEventListener("keyup", function() {
    emailContent = emailTextArea.value
    botaoEnviar.setAttribute('href', `mailto:josevneves@outlook.com?subject=Or%C3% - ${userName.value}&body=${emailContent}`);
})

botaoEnviar.addEventListener("click", function () {
    if (emailTextArea.value.length == 0 || userName.value.length == 0) {
        alert("Preencha os campos!")
    } else {
        botaoEnviar.setAttribute('href', `mailto:comercial@instalacoesjc.com?subject=${userName.value}&body=${emailTextArea.value}`);
    }
})