$(document).ready(function() {
    $('a').attr('target', '_blank'); 
    $( "ul li:nth-child(1)" ).prepend ('<i class="fab fa-facebook-f"></i>');
    $( "ul li:nth-child(2)" ).prepend ('<i class="fab fa-instagram"></i>');
    $( "ul li:nth-child(3)" ).prepend ('<i class="fab fa-twitter"></i>');
    $( "ul li:nth-child(4)" ).prepend ('<i class="fab fa-snapchat"></i>');
    $( "h2" ).on( "click", function() {
        $(this).css({"color": "red"});
      });
    $("section:eq(1) li:nth-child(4)").append ('<ul><li><a href="#">link 4.a</a></li></ul>');
    $("section:eq(1) li:nth-child(4)").after ('<li><a href="#">link 5</a></li>');


});






