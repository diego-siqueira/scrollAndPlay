var screen = $(window),
  screenHeight = screen.height() * 1.1//Add margin ,
  //isTouch = Modernizr.touch
lastScrollTop = screen.scrollTop();

$(window).scroll(function(event) {

  let st = $(this).scrollTop(),
    screenTop = screen.scrollTop(),
    screenBotton = screenTop + screenHeight

  $(".revealOnScroll").each(function() {
    let divToAnimate = $(this),
      offsetTop = divToAnimate.parent().offset().top,
      offsetBottom = offsetTop + divToAnimate.parent().height();;

    let holdAnimation = function(direction) {
      window.setTimeout(function() {
        divToAnimate.addClass('animated ' + divToAnimate.data(direction));
      }, parseInt(divToAnimate.data('timeout'), 10));
    }

    let activeAntimation = (direction) => {
      (divToAnimate.data('timeout')) ? holdAnimation(direction): divToAnimate.addClass('animated ' + divToAnimate.data(direction));
    };

    if ((screenBotton > offsetTop && screenBotton < offsetBottom) && lastScrollTop < st) {
      activeAntimation('down');
    } else if ((screenBotton > offsetBottom && screenTop < offsetBottom) && lastScrollTop > st) {
      activeAntimation('up');
    } else if ((screenBotton < offsetTop && screenTop < offsetBottom) || (screenBotton > offsetTop && screenTop > offsetBottom)) {
      divToAnimate.removeClass();
      divToAnimate.addClass('revealOnScroll')
    }
  })

  lastScrollTop = st;

})
