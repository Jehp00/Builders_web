document.addEventListener("DOMContentLoaded", function(event) {
    let btnMenu = document.querySelector('.btn-menu');
    let menu = document.querySelector('.list-container');
    let containerMenu = document.querySelector('.menu');
    let activator = true;

    btnMenu.addEventListener('click', () => {

        document.querySelector('.btn-menu i').classList.toggle('fa-times');

        if(activator){
            menu.style.left = '0';
            menu.style.transition = '0.5s';
            activator =false;
        }
        else{
            activator=false;
            menu.style.left = '-100%';
            menu.style.transition = '0.5s';
            activator=true;
        }
    });
    //Intercalar class active
    let enlaces = document.querySelectorAll('.list li a');
    enlaces.forEach((element) =>{
        element.addEventListener('click',(link) =>{
            enlaces.forEach( (link) =>{
                link.classList.remove('active')
            } )
            event.target.classList.add('active')
        })
    });

    //Efectos scroll
    let prevScrollPos = window.pageYOffset;
    let goTop = document.querySelector('.Go-top');
    window.onscroll = () =>{
        let currenScrollPos = window.pageYOffset;
        //Mostrar y ocultar menu
        if(prevScrollPos > currenScrollPos){
        containerMenu.style.top = '0';
        containerMenu.style.transition = '0.5s';
        }
        else{
        containerMenu.style.top = '-100px';
        containerMenu.style.transition = '0.5s';
        }
        prevScrollPos = currenScrollPos;

        let arriba = window.pageYOffset;
        if(arriba <= 600){
            containerMenu.style.borderBottom = 'none';
            goTop.style.right = '-100%';
        }
        else{
            containerMenu.style.borderBottom = '2px solid #F52D20';
            goTop.style.right = '0';
            goTop.style.transition = '0.8s'
        }
    }

    goTop.addEventListener('click', () => {
        document.body.scrollTOp = 0;
        document.documentElement.scrollTop = 0;
    });

    let verAbajo = document.querySelector('#See-Down');
    verAbajo.addEventListener('click', () => {
        document.body.scrollTop = 600;
        document.documentElement.scrollTop = 600;
    })
});