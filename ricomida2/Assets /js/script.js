$(function () {


    $('[data-toggle="cualquiera"]').tooltip('show');
    $('.carousel').carousel();
    $("#enviarCorreo").click(
        function (){
            $('[data-toggle="cualquiera"]').tooltip('hide')
            alert("el correo fue enviado")
        }
    )
  })