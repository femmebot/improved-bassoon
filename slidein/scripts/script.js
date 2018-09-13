
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

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = (event) => {
  // 1. loop over every image and figure out position where it needs to be shown
  sliderImages.forEach(sliderImage => {
    // console.log(event);
    // console.log(window.scrollY); // user scroll depth from top
    // console.log(window.innerHeight); // distance to the bottom of viewport
    // halfway through image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
    // offsetTop = dist from top of window to top of image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    };

    // 2.
  })
};

// addEventListener takes two args (event, function)
window.addEventListener('scroll', debounce(checkSlide));
