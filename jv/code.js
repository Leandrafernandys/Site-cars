AOS.init();
//Comportamento da seta sobe
//Quando ocorre rolagem na tela de navegação
$(window).scroll(function(){
    //Se a rolagem for maio ou igual a 550
    //Mostra a seta fade
    //caso contrário, ocultar a seta fade
    if($(window).scrollTop() >= 550)
    {
        $('.seta-sobe').fadeIn();

    }else{
        $('.seta-sobe').fadeOut();
    }
});

$('.seta-sobe').click(function(){
    $('body, html').animate({
        scrollTop: 0

    },1200);
});


//Rolagem com animação nos links superiores
$('.rolagem').click(function(){
    var id = $(this).attr('href');
    var destino = $(id).offset().top;
    $('html, body').animate({
        scrollTop: destino,
    });
});



// codigo do popup
let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".btn.cancel")
let acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)







