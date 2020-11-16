$(function () {

//tooltio
    $('[data-toggle="tooltip"]').tooltip()
//carousel
    $('.carousel').carousel();
//alerta
    $("#enviarCorreo").click(
        function (){
            $('[data-toggle="cualquiera"]').tooltip('hide')
            alert("El correo fue enviado")
        }
    )
 //color

 $(".titulo").click(
    function (){
        $(this).addClass("rojo")
        
    }
)



 $(".card-title").click(
    function (){
        $('.card-text').toggle()
        
    }
)

})