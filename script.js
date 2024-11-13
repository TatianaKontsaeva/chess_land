document.addEventListener("DOMContentLoaded", function() {
  const membersWrap = document.querySelectorAll(".members-wrap");
  const counter = document.querySelector(".members-btns .members-slide-counter");
  let currentSlide = 1;

  function showSlide(n) {
      if (n > membersWrap.length) {
          currentSlide = 1;
      } else if (n < 1) {
          currentSlide = membersWrap.length;
      }
      membersWrap.forEach((wrap) => {
          wrap.style.display = "none";
      });
      membersWrap[currentSlide - 1].style.display = "flex";
      counter.innerHTML = `<span style="color: #313132;">${currentSlide}</span>/${membersWrap.length}`;
  }

  function nextSlide() {
      showSlide(currentSlide += 1);
  }

  function prevSlide() {
      showSlide(currentSlide -= 1);
  }

  const prevBtn = document.querySelector(".members-slide_prev");
  const nextBtn = document.querySelector(".members-slide_next");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  const membersWrapMobile = document.querySelectorAll(".members-wrap_mobile");
  const counterMobile = document.querySelector(".members-btns_mobile .members-slide-counter_mobile");
  let currentSlideMobile = 1;

  function showSlideMobile(n) {
      if (n > membersWrapMobile.length) {
          currentSlideMobile = 1;
      } else if (n < 1) {
          currentSlideMobile = membersWrapMobile.length;
      }
      membersWrapMobile.forEach((wrap) => {
          wrap.style.display = "none";
      });
      membersWrapMobile[currentSlideMobile - 1].style.display = "flex";
      counterMobile.innerHTML = `${currentSlideMobile}/${membersWrapMobile.length}`;
  }

  function nextSlideMobile() {
      showSlideMobile(currentSlideMobile += 1);
  }

  function prevSlideMobile() {
      showSlideMobile(currentSlideMobile -= 1);
  }

  const prevBtnMobile = document.querySelector(".members-slide_prev_mobile");
  const nextBtnMobile = document.querySelector(".members-slide_next_mobile");

  prevBtnMobile.addEventListener("click", prevSlideMobile);
  nextBtnMobile.addEventListener("click", nextSlideMobile);

  setInterval(nextSlide, 3000);
  showSlide(currentSlide); 
  showSlideMobile(currentSlideMobile); 
});



document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slides_item_wrap_mobile');
  const prevButton = document.querySelector('.stages-slide_prev_mobile');
  const nextButton = document.querySelector('.stages-slide_next_mobile');
  const slideCounter = document.querySelector('.slide-counter');
  const indicatorsContainer = document.querySelector('.indicators');
  
  let currentSlide = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });

    slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }

  function createIndicators() {
    slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', () => {
        currentSlide = index;
        updateSlides();
      });
      indicatorsContainer.appendChild(indicator);
    });
  }

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  });

  createIndicators();
  updateSlides();
});
