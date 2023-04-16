var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        690: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});


// JavaScript code for filter functionality
const filterButtons = document.querySelectorAll('.filter-buttons button');
const swiperSlides = document.querySelectorAll('.swiper-slide');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // set active button class
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filterButtons.forEach(btn => btn.classList.remove('filter-btn-selected'));
    button.classList.add('active');
    button.classList.add('filter-btn-selected');


    

    // show/hide slides based on category
    const category = button.getAttribute('data-filter');
    swiperSlides.forEach(slide => {
      if (category === 'all' || slide.getAttribute('data-category') === category) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  });
});

const widthBreakpoint = 1100;
const refreshRate = 1000;
const selectorButtons = document.querySelectorAll(".carousel-indicators [data-bs-target]:not(.anos-control-indicator)");

window.addEventListener("resize", event => {
    if (window.innerWidth < widthBreakpoint) {

        selectorButtons.forEach(button => {
            if (!button.classList.contains("active")) {
                button.style.display = "none";
            }
        });
        startRefresh();
    }else{

        stopRefresh();

        selectorButtons.forEach(button => {
            if (!button.classList.contains("active")) {
                button.style.display = "block";
            }
        });

        
    }
})


let refresh;
let intervalId;
function startRefresh() {
    if (!refresh) {
        
        intervalId = setInterval(() => {
            selectorButtons.forEach(button => {
                if (button.classList.contains("active")){
                    button.style.display = "block";
                }else{
                    button.style.display = "none";
                }
            });
        
            console.log("Refreshed");
        
        }, 1000);
        
        refresh = true;
    }
}
function stopRefresh() {
    if (refresh) {
        clearInterval(intervalId);
        refresh = false;
    }
}







