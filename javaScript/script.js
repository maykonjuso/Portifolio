var menuItens1 = document.querySelectorAll('.seta');

menuItens1.forEach(item => {
    item.addEventListener('click', eventoClick);
})

var menuItens2 = document.querySelectorAll('.home1');

menuItens1.forEach(item => {
    item.addEventListener('click', eventoClick);
})

menuItens2.forEach(item => {
    item.addEventListener('click', eventoClick);
})

function eventoClick(event) {
    event.preventDefault();
    var elemento = event.target;
    var id = elemento.getAttribute('href');
    var to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 133,
        behavior: "smooth"
    });
}


// animação scroll

var target = document.querySelectorAll('[data-animacao]');
var classeAnimacao = 'animate';

function animacaoScroll() {
    var windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop){
            element.classList.add(classeAnimacao);
        } else{
            element.classList.remove(classeAnimacao);
        }

    });
}

window.addEventListener('scroll', function() {
    animacaoScroll();
}) 