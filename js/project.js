$(document).ready(function(){
    let divwidth = $('#sliderbox').width();
    let imgcount = $('#container li').length;
    // alert(divwidth);

    $('#container').width(divwidth * imgcount);
    $('#container li').width(divwidth);

    for (let i = 0; i < imgcount; i++){
        $('#button').append('<li></li>');
    }
    $('#button li:nth-child(1)').addClass('clickMe');

    let index;
    $('#container li').click(function () {
        index = $(this).index();

        $('#container').animate({
            left: divwidth * index * -1,
        });

        $(this).addClass('clickMe');
        $('#button li').not(this).removeClass('clickMe');
    });
});