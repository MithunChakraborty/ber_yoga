// Slider
const slider = document.getElementById('slider');
const sliderLeft = document.getElementById('slider-btn-left');
const sliderRight = document.getElementById('slider-btn-right');
index = 0;

setTimeout(() => {
    slider.style.transform = "translateX(-50%)";
}, 7000);

sliderLeft.addEventListener('click', () => {
    if (slider.style.transform != "translateX(0%)") {
        index = index + 50;
        slider.style.transform = "translateX(" + index + "%)";
    }
});
sliderRight.addEventListener('click', () => {
    if (slider.style.transform != "translateX(-50%)") {
        index = index - 50;
        slider.style.transform = "translateX(" + index + "%)";
    }
});

// Mobile menu
const header = document.getElementById('header');
const headerContent = document.getElementById('header-content');
const menuBtn = document.getElementById('menu-btn');
const menuBtnClose = document.getElementById('menu-btn-close');
const nav = document.getElementById('nav');
const signinBlock = document.getElementById('signin-block');
menuBtn.addEventListener('click', () => {
    menuBtn.className = "menu-btn";
    menuBtnClose.className = "menu-btn-close btn-active";
    header.className = "menu-active";
    nav.className = "";
    signinBlock.className = "signin-block";
});
menuBtnClose.addEventListener('click', () => {
    menuBtn.className = "menu-btn btn-active";
    menuBtnClose.className = "menu-btn-close";
    header.className = "";
    nav.className = "hidden-mobile";
    signinBlock.className = "signin-block hidden-mobile";
});

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});