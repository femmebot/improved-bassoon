const debounce = (func, wait = 20, immediate = true) => {
  // function debounce(func, wait = 20, immediate = true) {
  let timeout;

  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };

};

// const bgImage = document.querySelector('.bg-image');
// console.log(`bgImage type: ${typeof(bgImage)}`);
// get cards
const cards = document.querySelectorAll('.card');

// check if card is in view

// when card appears in viewport, move background image pos

const checkCard = (event) => {
  // 1. loop over every image and figure out position where it needs to be shown
  cards.forEach(card => {
    // console.log(event);
    // console.log(window.scrollY); // user scroll depth from top
    // console.log(window.innerHeight); // distance to the bottom of viewport
    // halfway through image
    const shiftBackgroundPosition = (window.scrollY + window.innerHeight) - card.height/2;
    // offsetTop = dist from top of window to top of image
    const cardBottom = card.offsetTop + card.height;
    const isHalfShown = shiftBackgroundPosition > card.offsetTop;
    const isNotScrolledPast = window.scrollY < cardBottom;
    if (isHalfShown && isNotScrolledPast) {
      document.body.classList.add('pos-0');
    } else {
      document.body.classList.remove('pos-0');
    };

  })
};

// addEventListener takes two args (event, function)
window.addEventListener('scroll', debounce(checkCard));
