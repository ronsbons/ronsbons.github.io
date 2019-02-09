$(document).ready(function (){
  // Insert all code here

  /* NAV
  =======================================*/
  // [X] TODO: Set event listeners for nav links to smoothly scroll to sections
    // Scroll animation
  $('.nav-link').on('click', function(event) {
    event.preventDefault();
    // Grabs the destination of the nav link clicked
    let linkTarget = $(this).attr('href');
    // Animates scrolling to that section
    $('html, body').animate({scrollTop: $(linkTarget).offset().top},500);
  });

  // [] TODO: Set event listener for when hamburger icon present? or when screen width < __? to slideUp/slideDown nav or toggle dropdown?
  $('.hamburger').on('click', function(event) {
    $('.dropdown-toggle').dropdown();
  })

  // When screen width is less than 896px, add class 'dropdown-menu' to div and ul
  function checkWidth(screenWidth) {
    if (screenWidth.matches) {
      $('.dropContainer').addClass('dropdown-menu');
      $('.nav').addClass('dropdown-menu');
    } else {
      $('.dropContainer').removeClass('dropdown-menu');
      $('.nav').removeClass('dropdown-menu');
    }
  }

  let screenWidth = window.matchMedia('(max-width: 896px)')
  checkWidth(screenWidth);
  screenWidth.addListener(screenWidth);

  /* PORTFOLIO
  =======================================*/



  /* SKILLS
  ========================================*/
  // [] TODO: Rotate content in and out on a timer
  let skills = $('.skillsSection');

  // fades in and out the whole section, not each div
  setInterval(function () {
    $(skills).animate({'opacity': 0}, 1000, function () {
      $(this).next('div');
    }).animate({'opacity': 1}, 1000);
  }, 4000);

  // Doesn't work
  /*
  for (var i = 0; i < skills.length; i++) {
    setInterval(function() {
      skills[i].animate({'opacity': 0}, 1000, function() {
          skills[i].next('div');
      }).animate({'opacity': 1}, 1000);
    }, 3000);
  };
  */

  // Doesn't work
  /*
  function showNextSkill() {
    for (var i = 0; i < skills.length; i++) {
      if(skills[i].style.visibility = 'hidden') {
        skills[i].animate({opacity: 1}, 'fast', function() {
          skills[i].style.visibility = 'visible';
        });
      } else {
        skills[i].animate({opacity: 0}, 'fast', function () {
          skills[i].style.visibility = 'hidden';
        });
      };
    };
  };

  showNextSkill();
  */

  // fades each section in and out but section jumps
  /*
  let skillIndex = -1;

  function showNextSkill() {
      ++skillIndex;
      skills.eq(skillIndex % skills.length)
          .fadeIn(2000)
          .delay(2000)
          .fadeOut(2000, showNextSkill);
  }

  showNextSkill();
  */



  /* CONTACT FORM
  ========================================*/
  // [X] TODO: Prevent default of submit button.
  $('form').on('submit', function(event) {
    event.preventDefault();
  })
});
