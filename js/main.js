$(function () {
  // SPメニューのスライドイン
  $('.js-nav-toggle').on('click', function () {
    $('#js-nav').toggleClass('is-open');
    $(this).toggleClass('is-active');

    const isOpen = $('#js-nav').hasClass('is-open');
    $(this).attr('aria-expanded', isOpen);

    $('body').toggleClass('is-nav-open');
  });


  // ふわっと表示(IntersectionObserverはjQueryに置き換える機能がないのでこのまま)
  const fadeElements = document.querySelectorAll('.js-fadein');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach((el) => {
    observer.observe(el);
  });


  // メインビジュアルスライダー(Slick)
  $('.main-visual-slider').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    lazyLoad: 'ondemand',
  });

  // FAQアコーディオン
  $('.faq-item .question').on('click', function () {
    $(this).closest('.faq-item').toggleClass('open');
  });


});