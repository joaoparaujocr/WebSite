$(window).on('load', function(){
    $('#btn-mobile').click(function(){
        $('#menu').toggleClass('active');
        $('#hamburguer').toggleClass('active');
        $('#menu').animate({
            height: 'toggle'
          });
    })

    $('#menu li').click(function(){
        $('#menu').toggleClass('active');
        $('#hamburguer').toggleClass('active');
        $('#menu').animate({
            height: 'toggle'
          });
    })

    $(window).resize(function(){
        document.location.reload(true);
    })
})