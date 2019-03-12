$(function(){
  var paralax1 = $('.paralax1')
  var paralax2 = $('.paralax2')
  var paralax3 = $('.paralax3')
  var paralax4 = $('.paralax4')
  var paralax5 = $('.paralax5')
  var paralax6 = $('.paralax6')
  var paralax7 = $('.paralax7')
  var paralaxfon2 = $('.paralaxfon2')

  $(document).mousemove(function(e){
    var valueX = (e.pageX * -1/15);
    var valueY= (e.pageY * -1/15);
    var valueX2 = (e.pageX * -1/30);
    var valueY2= (e.pageY * -1/30);
    var valueX3 = (e.pageX * -1/8);
    var valueY3= (e.pageY * -1/8);

    paralax1.css({
      'transform':'translate3d('+valueX+'px, '+valueY+'px, 0)'
    })
    paralax2.css({
      'transform':'translate3d('+(valueX2*-1)+'px, '+(valueX2*-1)+'px, 0)'
    })
    paralax3.css({
      'transform':'translate3d('+(valueX/2)+'px, '+(valueY/2)+'px, 0)'
    })
    paralax4.css({
      'transform':'translate3d('+(valueX3*-1)+'px, '+(valueY3*-1)+'px, 0)'
    })
    paralax5.css({
      'transform':'translate3d('+(valueX3/3)+'px, '+(valueY3/3)+'px, 0)'
    })
    paralax6.css({
      'transform':'translate3d('+(valueX3/-4)+'px, '+(valueY3/-4)+'px, 0)'
    })
    paralax7.css({
      'transform':'translate3d('+(valueX3/-4)+'px, '+(valueY3/-4)+'px, 0)'
    })
    paralaxfon2.css({
      'transform':'translate3d('+(valueX2/-6)+'px, '+(valueY2/-6)+'px, 0)'
    })
  })
})