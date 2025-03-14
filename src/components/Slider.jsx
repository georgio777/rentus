import React, { useEffect } from 'react';
import img from '../assets/bannerpic.png'

const Slider = () => {
  useEffect(() => {
    const pagination = document.querySelector('.pagination');
    const slidesContainer = document.querySelector('.slides');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');
    const slideCount = slidesContainer.children.length;
    let slides = Array.from(slidesContainer.children);
    let offset = slidesContainer.children[0].offsetWidth;
    let autoSlideInterval;
    let interval = 3500; // Интервал в миллисекундах для автопрокрутки
    let setAutoSlide = false;

    // Initialize pagination with "current | total" format
    const paginationText = document.createElement('span');
    paginationText.classList.add('pagination__text');
    pagination.appendChild(paginationText);

    const updatePagination = () => {
      const currentSlideIndex = slides[0].dataset.index;
      paginationText.innerHTML = `${currentSlideIndex} <span class="separator">|</span> ${slideCount}`;
    };
    updatePagination();

    // Функция для прокрутки вперед
    function slideForward() {
      const firstSlide = slides.shift(); // Убираем первый элемент из массива
      slides.push(firstSlide); // Добавляем его в конец массива
      slidesContainer.style.transition = '500ms';
      slidesContainer.style.transform = `translateX(-${offset}px)`;
      setTimeout(() => {
        slidesContainer.appendChild(firstSlide); // Перемещаем его в конец контейнера
        slidesContainer.style.transition = '0ms';
        slidesContainer.style.transform = `translateX(0px)`;
      }, 500);
      updatePagination();
    }

    // Функция для прокрутки назад
    function slideBackward() {
      const lastSlide = slides.pop(); // Убираем последний элемент из массива
      slides.unshift(lastSlide); // Добавляем его в начало массива

      // Сначала вставляем последний слайд в начало без анимации
      slidesContainer.insertBefore(lastSlide, slidesContainer.firstChild);
      slidesContainer.style.transition = '0ms';
      slidesContainer.style.transform = `translateX(-${offset}px)`;

      // Затем запускаем анимацию перемещения на место
      setTimeout(() => {
        slidesContainer.style.transition = '500ms';
        slidesContainer.style.transform = `translateX(0px)`;
      }, 20); // Небольшая задержка для запуска анимации
      updatePagination();
    }

    // Добавляем обработчики событий
    nextButton.addEventListener('click', () => {
      slideForward();
      if (setAutoSlide) {
        stopAutoSlide();
        startAutoSlide();
      }
    });

    prevButton.addEventListener('click', () => {
      slideBackward();
      if (setAutoSlide) {
        stopAutoSlide();
        startAutoSlide();
      }
    });

    // Инициализация автоматической смены слайдов
    const startAutoSlide = () => (autoSlideInterval = setInterval(slideForward, interval));

    // Остановка автоматической смены слайдов
    const stopAutoSlide = () => clearInterval(autoSlideInterval);

    slidesContainer.addEventListener('mouseenter', stopAutoSlide);

    // Инициализация автопрокрутки
    if (setAutoSlide) {
      startAutoSlide();
      slidesContainer.addEventListener('mouseleave', startAutoSlide);
    }

    // Обработка свайпов
    slidesContainer.addEventListener('touchstart', handleTouchStart, false);
    slidesContainer.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
      return evt.touches;
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;

      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          // К следующему слайду
          stopAutoSlide();
          slideForward();
          startAutoSlide();
        } else {
          // К предыдущему слайду
          stopAutoSlide();
          slideBackward();
          startAutoSlide();
        }
      } else {
        if (yDiff > 0) {
          // Свайп вниз
        } else {
          // Свайп вверх
        }
      }
      // Сброс значений
      xDown = null;
      yDown = null;
    }

    // Очистка при размонтировании компонента
    return () => {
      stopAutoSlide();
      slidesContainer.removeEventListener('mouseenter', stopAutoSlide);
      slidesContainer.removeEventListener('mouseleave', startAutoSlide);
      slidesContainer.removeEventListener('touchstart', handleTouchStart);
      slidesContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        <div className="slide first__slide" data-index="1">
          <div className="slide__inner">
            <div className="slide__left">
              <h2 className="slide__heading">
                Недорогая аренда строительного инструмента
              </h2>
              <div className='advantages'>
                <div className='advantage'>
                  <h3>1 час</h3>
                  <p>И нужный инструмент у вас </p>
                </div>
                <div className='advantage'>
                  <h3>300 ₽</h3>
                  <p>Рублей средняя ставка за час</p>
                </div>
                <div className='advantage'>
                  <h3>550+</h3>
                  <p>Клиентов уже выбрали нас </p>
                </div>
              </div>
            </div>
            <div className="slide__right">
                <img src={img} alt="banner photo" />
            </div>
          </div>
        </div>
        <div className="slide second__slide" data-index="2">
        <div className="slide__inner">
            <div className="slide__left">
              <h2 className="slide__heading">
                Недорогая аренда строительного инструмента
              </h2>
              <div className='advantages'>
                <div className='advantage'>
                  <h3>1 час</h3>
                  <p>И нужный инструмент у вас </p>
                </div>
                <div className='advantage'>
                  <h3>300 ₽</h3>
                  <p>Рублей средняя ставка за час</p>
                </div>
                <div className='advantage'>
                  <h3>550+</h3>
                  <p>Клиентов уже выбрали нас </p>
                </div>
              </div>
            </div>
            <div className="slide__right">
                <img src={img} alt="banner photo" />
            </div>
          </div>
        </div>
      </div>
      <div className="slider__navigation">
        <button id="prev" className=' icon-Arrow_s_left'>
        </button>
        <button id="next" className=' icon-Arrow_s_right'>
        </button>
      </div>
      <div className="pagination"></div>
    </div>
  );
};

export default Slider;