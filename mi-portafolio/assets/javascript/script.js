$(function(){
    
    $('[data-toggle="tooltip"]').tooltip();
      
    $('[data-toggle="popover"]').popover();

    $(".card-title").click(
        function (){
            $('.card-text').toggle()
            
        }
    )

  });
  