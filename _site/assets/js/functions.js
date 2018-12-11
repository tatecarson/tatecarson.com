$(function () {
  mentoringBubbleClick();
  setInterval(function () { articleTada() ;}, 4000);
  designBGStuff();
  smoothScroll(300);
  mobileNav();
});

function mobileNav () {
  $('.mobile-nav-toggle').on('click', function () {
    var status = $(this).hasClass('is-open');
    if (status) { $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); } else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function (event) {
	    var target = $($(this).attr('href'));

	    if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
  });
}

function designBGStuff () {
  $('.design-img-link').hover(function () {
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function () {
    // off > revert the color
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
  });
}

function articleTada () {
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1;
  $('.article-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

function mentoringBubbleClick () {
  $('.face').on('click', function () {
    var $this = $(this),
      faceTop = $this.position().top,
      vertMath = -1 * (faceTop - 230),
      faceLeft = $this.position().left,
      horizMath = 0 - faceLeft;

    if ($(window).width() > 640) {
      $this.parent().css('top', +vertMath + 'px');
    } else {
      if ($this.hasClass('back-btn')) {
        mentoringNarrowStart();
      } else {
        $this.parent().css('left', +horizMath + 'px');
      }
    }
    if (!$this.hasClass('back-btn')) {
      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
    }
  });
}

$(window).scroll(function () {
  youtubeVidScroll();
  // startMentoring();
  // startArticles();
});

function youtubeVidScroll () {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
}

function mentoringNarrowStart () {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart () {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

$(window).resize(function () {
  if ($(window).width() > 640) {
    // mentoringWideStart();
  } else {
    // mentoringNarrowStart();
  }
});
