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


  $('.sendMessage').on('click touchstart',() => {
    event.preventDefault();

    //get the name field value
    const name = $('#name').val();
    //get the name field value
    const email = $('#email').val();
    //get the comments
    const comments = $('#textarea1').val();


    //send to formspree
    $.ajax({
      url: 'https://formspree.io/nathanieljansen@gmail.com',
      method: 'POST',
      data: {
        name: name,
        _replyto: email,
        comments: comments,
        _subject: 'Nathaniel Jansen Form Submission',
      },
      dataType: "json",
      success: function () {
        $("form").trigger("reset");
      }
    });
  })
})