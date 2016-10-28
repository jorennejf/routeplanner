$('#showLeft').click(function() {
  $('.menu-left').toggleClass('left-open');
});

$('#showRight').click(function() {
  $('.menu-right').toggleClass('right-open');
});

$('#showTop').click(function() {
  $('.menu-top').toggleClass('top-open');
});

$('#showBottom').click(function() {
  $('.menu-bottom').toggleClass('bottom-open');
});

$('.backBtn').click(function() {
  $('.menu').removeClass('top-open bottom-open right-open left-open pushleft-open pushright-open');
  $('body').removeClass('push-toleft push-toright');
});

$('body').addClass('push');

$('#showLeftPush').click(function () {
  $('body').toggleClass('push-toleft');
  $('.push-left').toggleClass('pushleft-open');
});

$('#showRightPush').click(function () {
  $('body').toggleClass('push-toright');
  $('.push-right').toggleClass('pushright-open');
});


$(window).load(function(){

    // set the image-map width and height to match the img size
    $('#image-map').css({'width':$('#image-map img').width(),
                      'height':$('#image-map img').height()
    })
    
    //tooltip direction
    var tooltipDirection;
                 
    for (i=0; i<$(".pin").length; i++)
    {               
        // set tooltip direction type - up or down             
        if ($(".pin").eq(i).hasClass('pin-down')) {
            tooltipDirection = 'tooltip-down';
        } else {
            tooltipDirection = 'tooltip-up';
            }
    
        // append the tooltip
        $("#image-map").append("<div style='left:"+$(".pin").eq(i).data('xpos')+"px;top:"+$(".pin").eq(i).data('ypos')+"px' class='" + tooltipDirection +"'>\
                                            <div class='tooltip'>" + $(".pin").eq(i).html() + "</div>\
                                    </div>");
    }    
    
    // show/hide the tooltip
    $('.tooltip-up, .tooltip-down').click(function(){
                $(this).children('.tooltip').fadeIn(100);
            }).mouseleave(function(){
                $(this).children('.tooltip').fadeOut(100);
            })
});



