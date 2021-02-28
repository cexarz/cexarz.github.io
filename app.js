const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //barra del nav
        nav.classList.toggle('nav-active');
        //links animados
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }


        });
        //animacion del burger
        burger.classList.toggle('toggle');
    });

}

navSlide();





console.log("hola")

localStorage.setItem('name', 'Cesar')

localStorage.setItem("apellido", "Maradiaga")