//alert('Hello Gulp!');

function fontsStyle(params) {

  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}

function cb() { }
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
});
// === Swiper === 
// channels__channel-slider
const swiperRecommended = new Swiper('#recomm', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,       //!decrise if slides jump one on another
  spaceBetween: 40,
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-recomm__slider-button-next',
    prevEl: '.channel-recomm__slider-button-prev',
  },
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'horizontal',
  loop: true,
  keyboardControl: true,
  grabCursor: true,

  // Zoom
  zoom: {
    maxRatio: 5,
    mitRatio: 1,
  },

  slidesPerView: 1,       //!decrise if slides jump one on another
  spaceBetween: 5,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header-menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('open');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('open');
  }
});

console.log("Use this: npm i --save-dev gulp-uglify-es");

