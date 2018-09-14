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

const cards = [];

// const bgImage = document.querySelector('.bg-image');
// console.log(`bgImage type: ${typeof(bgImage)}`);
// get cards
const numberOfCards = document.querySelectorAll('section').length;
console.log(`No of cards: ${numberOfCards}`);

for (i = 0; i < numberOfCards; i++) {
  cards.push(`.card-${i}`);
  console.log(cards[i]);
};


// check if card is in view

// when card appears in viewport, move background image pos

const checkCard = (event) => {
  // 1. loop over every image and figure out position where it needs to be shown
  for (i = 0; i < numberOfCards; i++) {
    card = document.querySelector(cards[i]);
    const shiftBackgroundPosition = (window.scrollY + window.innerHeight) - card.clientHeight/2;
    // offsetTop = dist from top of window to top of image
    // const cardBottom = card.offsetTop + card.clientHeight;
    const isHalfShown = shiftBackgroundPosition > card.offsetTop;
    // const isNotScrolledPast = window.scrollY < cardBottom;
    // if (isHalfShown && isNotScrolledPast) {
    if (isHalfShown) {
      document.body.classList.add(`pos-${i}`)
      // console.log('showing!');
    } else {
      document.body.classList.remove(`pos-${i}`)
      // console.log('not showing!');
    };

  }
  // cards.forEach(card => {
  //   // console.log(event);
  //   // console.log(window.scrollY); // user scroll depth from top
  //   // console.log(window.innerHeight); // distance to the bottom of viewport
  //   // halfway through image
  //   // console.log(`card height: ${card.clientHeight}`);
  //   const shiftBackgroundPosition = (window.scrollY + window.innerHeight) - card.clientHeight/2;
  //   // offsetTop = dist from top of window to top of image
  //   const cardBottom = card.offsetTop + card.clientHeight;
  //   const isHalfShown = shiftBackgroundPosition > card.offsetTop;
  //   const isNotScrolledPast = window.scrollY < cardBottom;
  //   if (isHalfShown && isNotScrolledPast) {
  //     document.body.classList.add('pos-0');
  //     document.querySelector('.content').classList.add('red');
  //     console.log('showing!');
  //   } else {
  //     document.body.classList.remove('pos-0');
  //     document.querySelector('.content').classList.remove('red');
  //     console.log('not showing!');
  //   };
  //
  // })
};

// addEventListener takes two args (event, function)
window.addEventListener('scroll', debounce(checkCard));
// window.addEventListener('scroll', checkCard);
