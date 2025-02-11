// let carouselCurrentIndex = 0;
// const carouselSlides = document.querySelectorAll(".carousel-slide");
// const carouselContainer = document.querySelector(".carousel-slides");
// const bottomSections = document.querySelector(".carousel-bottom-sections");

// function isMobileView() {
//   return window.innerWidth <= 480;
// }

// function updateBottomSectionVisibility() {
//   if (isMobileView()) {
//     bottomSections.style.display = "none";
//   } else {
//     bottomSections.style.display = "flex";
//   }
// }

// function showCarouselSlide(index) {
//   const carouselSlideWidth = carouselSlides[0].clientWidth;
//   carouselContainer.style.transform = `translateX(-${carouselSlideWidth * index}px)`;

//   const currentSlideText =
//     carouselSlides[index].querySelector(".carousel-text");
//   currentSlideText.style.animation = "none";
//   setTimeout(() => {
//     currentSlideText.style.animation = "";
//   }, 10);

//   updateBottomSectionVisibility();
// }

// function nextCarouselSlide() {
//   carouselCurrentIndex = (carouselCurrentIndex + 1) % carouselSlides.length;
//   showCarouselSlide(carouselCurrentIndex);
// }

// window.addEventListener("load", () => {
//   showCarouselSlide(carouselCurrentIndex); /* Ensure correct initial slide */
//   updateBottomSectionVisibility();
// });
// window.addEventListener("resize", () => {
//   showCarouselSlide(carouselCurrentIndex); /* Adjust to window size changes */
//   updateBottomSectionVisibility();
// });

// setInterval(nextCarouselSlide, 5000);

// let carouselCurrentIndex = 0;
// const carouselSlides = document.querySelectorAll(".carousel-slide");
// const carouselContainer = document.querySelector(".carousel-slides");
// const videoPlayers = [];

// function isMobileView() {
//   return window.innerWidth <= 480;
// }

// function updateBottomSectionVisibility() {
//   if (isMobileView()) {
//     bottomSections.style.display = "none";
//   } else {
//     bottomSections.style.display = "flex";
//   }
// }

// function showCarouselSlide(index) {
//   const carouselSlideWidth = carouselSlides[0].clientWidth;
//   carouselContainer.style.transform = `translateX(-${carouselSlideWidth * index}px)`;
//   updateBottomSectionVisibility();
// }

// function nextCarouselSlide() {
//   carouselCurrentIndex = (carouselCurrentIndex + 1) % carouselSlides.length;
//   showCarouselSlide(carouselCurrentIndex);
// }

// // This function is called when the YouTube player state changes
// function onPlayerStateChange(event) {
//   // Check if the video has finished playing (state = 0)
//   if (event.data === YT.PlayerState.ENDED) {
//     nextCarouselSlide();
//   }
// }

// // Initialize the YouTube players for each iframe
// function initYouTubePlayers() {
//   const iframes = document.querySelectorAll('iframe');
//   iframes.forEach((iframe, index) => {
//     const player = new YT.Player(iframe, {
//       events: {
//         'onStateChange': onPlayerStateChange
//       }
//     });
//     videoPlayers.push(player);
//   });
// }

// window.addEventListener("load", () => {
//   showCarouselSlide(carouselCurrentIndex); // Ensure correct initial slide
//   updateBottomSectionVisibility();
//   initYouTubePlayers(); // Initialize YouTube players
// });

// window.addEventListener("resize", () => {
//   showCarouselSlide(carouselCurrentIndex); // Adjust to window size changes
//   updateBottomSectionVisibility();
// });

// setInterval(nextCarouselSlide, 5000);



let carouselCurrentIndex = 0;
const carouselSlides = document.querySelectorAll(".carousel-slide");
const carouselContainer = document.querySelector(".carousel-slides");
const videoPlayers = [];

function isMobileView() {
  return window.innerWidth <= 480;
}

function updateBottomSectionVisibility() {
  if (isMobileView()) {
    bottomSections.style.display = "none";
  } else {
    bottomSections.style.display = "flex";
  }
}

function showCarouselSlide(index) {
  const carouselSlideWidth = carouselSlides[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${carouselSlideWidth * index}px)`;
  updateBottomSectionVisibility();
}

function nextCarouselSlide() {
  carouselCurrentIndex = (carouselCurrentIndex + 1) % carouselSlides.length;
  showCarouselSlide(carouselCurrentIndex);
}

// This function is called when the YouTube player state changes
function onPlayerStateChange(event) {
  // Check if the video has finished playing (state = 0)
  if (event.data === YT.PlayerState.ENDED) {
    nextCarouselSlide();
  }
}

// Initialize the YouTube players for each iframe
function initYouTubePlayers() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe, index) => {
    const player = new YT.Player(iframe, {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
    videoPlayers.push(player);
  });
}

window.addEventListener("load", () => {
  showCarouselSlide(carouselCurrentIndex); // Ensure correct initial slide
  updateBottomSectionVisibility();
  initYouTubePlayers(); // Initialize YouTube players
});

window.addEventListener("resize", () => {
  showCarouselSlide(carouselCurrentIndex); // Adjust to window size changes
  updateBottomSectionVisibility();
});

setInterval(nextCarouselSlide, 5000);
