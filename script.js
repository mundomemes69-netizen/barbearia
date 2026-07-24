 // =======================================
// MENU MOBILE
// =======================================

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

if(menuButton){

    menuButton.addEventListener("click", ()=>{

        menu.classList.toggle("active");

        menuButton.classList.toggle("open");

    });

}


// Fechar menu ao clicar em um link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", ()=>{

        menu.classList.remove("active");

    });

});



// =======================================
// SCROLL SUAVE
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
// =======================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});


document.querySelectorAll(".reveal").forEach(element=>{

    observer.observe(element);

});



// =======================================
// BOTÃO VOLTAR AO TOPO
// =======================================

const backTop = document.querySelector(".back-top");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        backTop.classList.add("active");

    }else{

        backTop.classList.remove("active");

    }


});


if(backTop){

    backTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });

}

