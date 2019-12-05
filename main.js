// Show class
const items = document.querySelectorAll('#timeline > ul > li, #main-header, #description .container, #grid-photos .photos .card');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

  // Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

//   Smoth Scrolling
$('#navbar ul li a:first-child, .header-nav a:last-child, #main-header .top-fixed, #main-header .bottom-fixed').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -50
      },
      800
    );
  }
});

$('.header-nav a:first-child').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -220
      },
      200
    );
  }
});

$('.header-nav a:nth-child(2)').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -40
      },
      400
    );
  }
});

// Sticky menu background - opacity
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});