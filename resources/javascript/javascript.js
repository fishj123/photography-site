$(document).ready(function(){
var userScrollNone = 0;

$(window).scroll(function() {

var userScrollTop = $(this).scrollTop();

if (userScrollTop - userScrollNone > 50) {
    var navBarHeight = $('header').css('height');
    $('header').animate({top: '-' + navBarHeight}, 150);
    userScrollNone = userScrollTop;

} else if (userScrollNone - userScrollTop > 50) {
    $('header').animate({top:'0px'}, 150);
    userScrollNone = userScrollTop;
    }
});

});
