window.onbeforeunload = () => {
  window.scrollTo(0, 0);

}

$(document).ready(function () {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('#logo').addClass('animated flipInX');
  $('.frontend').css('visibility', 'hidden')
  $('.backend').css('visibility', 'hidden')

  $('.button-collapse').sideNav({
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  if (window.location.pathname == "/") {
    $(window).scroll(function () {
      var hT = $('.frontendHeader').offset().top,
        hH = $('.frontendHeader').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if (wS > (hT + hH - wH)) {
        $('.frontend').css('visibility', 'visible')
        $('.backend').css('visibility', 'visible')
        $('.frontend').addClass('animated rollIn')
        $('.backend').addClass('animated rollIn')
      }
    });
  }
  $('.getToKnow').on('click', () => {
    $("html, body").animate({
      scrollTop: $('.name').offset().top - 100
    }, 1000);

  })

  $('.seeWork').on('click', () => {
    $("html, body").animate({
      scrollTop: $('.pastProjects').offset().top - 100
    }, 1000);

  })


  $(".ajaxForm").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
          alert("We received your submission, thank you!");
        } else {
          alert("An error occured: " + response.message);
        }
      }
    });
  });
})