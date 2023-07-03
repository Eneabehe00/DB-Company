// Navbar
let navbar = document.querySelector('#navbar');

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 20) {
        navbar.style.height = '70px';
    }
    else {
        navbar.style.height = '80px';
    }
})

// Header
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
// Timeline
function animateTimelineItems() {
    let timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(function(item) {
      if (isElementInViewport(item)) {
        item.classList.add('animate');
      }
    });
  }

  function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', animateTimelineItems);
  animateTimelineItems();
