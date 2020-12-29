// ===============backmove============
$('section#movepic').mousemove(function(e){
            var moveX = (e.pageX * -1 / 40);
            var moveY = (e.pageY * -1 / 40);
            $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})
// ================nav change=============
$(function(){
                $("span.ham").on("click", function(){
                    $("aside.aside01").toggleClass("-on");
                });
});
// ============  輪播圖==================
$(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    $('#image-gallery').lightSlider({
        // gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});
// =====================================================