$(function() {

    function sliderHot(focusId, sliderId) {
        var count = 0;
        $(focusId).mouseenter(function() {
            clearInterval(time);
            var ol = $(this);
            ol.addClass('active').siblings().removeClass('active');
            var index = ol.index();
            var sss = $(sliderId)
            sss.eq(index).show().siblings().hide();
            count = index;
        });

        // var count = $('focusId[class="active"]').index();
        console.log(count);
        var slider = function() {
            count++;
            console.log(count);
            len = $(focusId).length - 1;
            count = count > len ? 0 : count;
            $(sliderId).eq(count).show().siblings().hide();
            $(focusId).eq(count).addClass('active').siblings().removeClass('active');
        }
        var time = setInterval(slider, 1000);
        $(focusId).mouseleave(function() {
            time = setInterval(slider, 1000);
        })
    }
    sliderHot('#num li', '.sss');
    sliderHot('#num1 li', '.sss1');
    $('.fr.h_r ul li').click(function() {
        var index = $(this).index() + 1;

        // var page = $('.page');
        // page.eq(index).addClass('current').siblings().removeClass('current');
        // var navbar = $('#navBar li')
        // navbar.eq(index).addClass('active').siblings().removeClass('active');
        $('#navBar li').eq(index).click();
    });
    $('[value="立即申请"]').click(function() {
        $('#navBar li').eq(3).click();
    });

})