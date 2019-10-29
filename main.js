const items = document.querySelectorAll('#timeline > ul > li');

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
$('#navbar ul li a:first-child, .header-nav a:last-child').on('click', function(event) {
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
        scrollTop: $(hash).offset().top -20
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