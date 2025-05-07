document.addEventListener('DOMContentLoaded', function() {
    // --- Области на изображении ---
    const carContainer = document.getElementById('car-container');
    const carImage = document.getElementById('car-image');
    const pricingOptions = document.getElementById('pricing-options');

    const areas = [
        { 
            name: "Капот",
            shape: "poly",
            coords: [10, 10, 50, 10, 50, 100, 10, 100], // примерные пиксельные координаты
            color: "rgba(255, 0, 179, 0.3)"
        },
        {
            name: "Дверь",
            shape: "poly",
            coords: [400, 150, 500, 140, 520, 240, 430, 250], // примерные координаты
            color: "rgba(255,0,0,0.3)"
        }
    ];

    // Создаём интерактивные зоны
    areas.forEach(area => {
        const div = document.createElement('div');
        div.className = 'highlight-area';
        div.dataset.part = area.name;
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.pointerEvents = 'auto';
        div.style.clipPath = `polygon(${area.coords.join('px, ')}px)`;
        div.style.backgroundColor = area.color;
        div.style.cursor = 'pointer';

        div.addEventListener('click', function() {
            showPricingOptions(area.name);
        });

        carContainer.appendChild(div);
    });

    function showPricingOptions(partName) {
        let optionsHTML = `<h3>Варианты для "${partName}"</h3>`;
        if (partName === "Капот") {
            optionsHTML += `
                <p>▸ Наклейка 10x10 см: <b>1000 руб/день</b></p>
                <p>▸ Наклейка 20x20 см: <b>2000 руб/день</b></p>
                <p>▸ Полное покрытие: <b>5000 руб/день</b></p>`;
        } else if (partName === "Дверь") {
            optionsHTML += `
                <p>▸ Наклейка 15x15 см: <b>1500 руб/день</b></p>
                <p>▸ Наклейка 30x30 см: <b>3000 руб/день</b></p>
                <p>▸ Полное покрытие: <b>4500 руб/день</b></p>`;
        }
        optionsHTML += `<button class="buy-btn">Выбрать вариант</button>`;
        pricingOptions.innerHTML = optionsHTML;

        // Обработчик для кнопки
        const buyBtn = document.querySelector('.buy-btn');
        if (buyBtn) {
            buyBtn.addEventListener('click', function() {
                alert(`Вы выбрали размещение на ${partName}!`);
            });
        }
    }

    // --- Фото галерея ---
    const imagesData = [
        { src: 'images/photo1.jpg', desc: 'Описание 1' },
        { src: 'images/photo2.jpg', desc: 'Описание 2' },
        { src: 'images/photo3.jpg', desc: 'Описание 3' }
    ];

    const totalPhotos = imagesData.length;
    document.getElementById('total').textContent = totalPhotos;

    const currentImg = document.getElementById('current-img');
    const desc = document.getElementById('photo-desc');
    const indicatorsContainer = document.getElementById('indicators');

    let currentIndex = 0;

    // Создаем точки
    imagesData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'indicator' + (index === 0 ? ' active' : '');
        dot.dataset.index = index;
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = index === 0 ? 'black' : 'gray';
        dot.style.cursor = 'pointer';
        indicatorsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.indicator');

    // Обновление фото и точек
    function updateGallery(index) {
        currentIndex = index;
        currentImg.src = imagesData[index].src;
        desc.textContent = imagesData[index].desc;

        // Обновляем активную точку
        dots.forEach(d => {
            d.classList.remove('active');
            d.style.backgroundColor = 'gray';
        });
        dots[index].classList.add('active');
        dots[index].style.backgroundColor = 'black';
    }

    // Обработчик клика по точкам
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            updateGallery(index);
        });
    });

    // Инициализация первой картинки
    updateGallery(0);
});

function toggleInfo(id) {
    const info = document.getElementById(id);
    const allPopups = document.querySelectorAll('.info-popup');
    allPopups.forEach(popup => {
        if (popup.id !== id) popup.style.display = 'none';
    });

    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
    }
}

document.querySelectorAll('.car-profile .overlay button').forEach(btn => {
  btn.addEventListener('click', () => {
    // скрываем все описания
    document.querySelectorAll('#description .desc').forEach(d => {
      d.style.display = 'none';
    });
    // показываем выбранное описание
    const descId = btn.getAttribute('data-desc');
    document.getElementById(descId).style.display = 'block';
  });
});

  const imagesData = [
  { src: 'models/st2.jpg', desc: 'Это была первая Жига за 20 тысяч рублей — гнилая, косая, с кривыми доками, не на ходу, но она была наша. До гаража тащили на тросу.' },
  { src: 'models/st3.jpg', desc: 'По окончании сезона решили купить живой аппарат, который обошелся в 50 тысяч. Уже планы были серьезные.' },
  { src: 'models/st1.jpg', desc: 'Первая квалификация, которую удалось взять.' },
  { src: 'models/st4.jpg', desc: 'Тут тоже что-то победили.' },
  { src: 'models/st5.jpg', desc: 'Полетели в Курск, там купили BMW Touring E36, проехали на корче 1200 километров до дома и начали катать летом.' },
  { src: 'models/st6.1.jpg', desc: 'Первые соревнования на зимней резине с помойки и 193-мя лошадьми под капотом.' },
  { src: 'models/st6.jpg', desc: 'Выковыривали остатки шипов.' },
  { src: 'models/st7.jpg', desc: 'Качали 5 очков в колеса — даже дымили иногда.' },
  { src: 'models/st8.jpg', desc: 'Потом решили купить новое сердце для BMW.' },
  { src: 'models/st9.jpg', desc: 'Но судьба распорядилась иначе — оно застучало в другой машине.' },
  { src: 'models/st10.jpg', desc: 'И вот — S13, уже третий сезон в соревнованиях.' }
]
  ;

  const totalPhotos = imagesData.length;
  document.getElementById('total').textContent = totalPhotos;

  const currentImg = document.getElementById('current-img');
  const desc = document.getElementById('photo-desc');

  let currentIndex = 0;

  // Изначально показываем первое фото
  currentImg.src = imagesData[0].src;
  desc.innerHTML = `<p>${imagesData[0].desc}</p>`;

  // Обработка клика по изображению — переключение на следующее
  currentImg.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagesData.length;
    updateGallery(currentIndex);
  });

  // Обработчики стрелок
  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagesData.length) % imagesData.length;
    updateGallery(currentIndex);
  });
  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagesData.length;
    updateGallery(currentIndex);
  });

  // Точки — тоже можно оставить
  const indicatorsContainer = document.getElementById('indicators');
  imagesData.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'indicator' + (index === 0 ? ' active' : '');
    dot.dataset.index = index;
    indicatorsContainer.appendChild(dot);
  });
  const dots = document.querySelectorAll('.indicator');

  function updateGallery(index) {
    currentImg.src = imagesData[index].src;
    desc.innerHTML = `<p>${imagesData[index].desc}</p>`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // Клик по точкам
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      updateGallery(parseInt(dot.dataset.index));
    });
  });

  const dateElements = document.querySelectorAll('.date');
const detailsDiv = document.getElementById('event-details');

dateElements.forEach(el => {
  el.addEventListener('click', () => {
    const info = el.getAttribute('data-info');
    detailsDiv.innerHTML = info;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.team-slider');
  const wrapper = document.querySelector('.team-slider-wrapper');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  const cards = document.querySelectorAll('.team-member');
  const cardWidth = cards[0].offsetWidth + 16; // ширина карточки + margin-right
  const totalCards = cards.length;

  let currentIndex = 0;


  function updateSlider() {
    const maxTranslateX = Math.max(0, (totalCards * cardWidth) - slider.parentElement.offsetWidth);
    let translateX = currentIndex * cardWidth;

    if (translateX > maxTranslateX) {
      translateX = maxTranslateX;
    }
    if (translateX < 0) {
      translateX = 0;
    }

    slider.style.transform = `translateX(-${translateX}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = 0;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    const maxIndex = Math.ceil(((totalCards * cardWidth) - slider.parentElement.offsetWidth) / cardWidth);
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    updateSlider();
  });

  // Можно добавить свайп на мобильных (опционально)
  let startX = 0;
  let isDown = false;

  slider.parentElement.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
  });

  slider.parentElement.addEventListener('touchend', (e) => {
    if (!isDown) return;
    isDown = false;
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) {
      // свайп вправо
      currentIndex--;
      if (currentIndex < 0) currentIndex = 0;
      updateSlider();
    } else if (startX - endX > 50) {
      // свайп влево
      currentIndex++;
      const maxIndex = Math.ceil(((totalCards * cardWidth) - slider.parentElement.offsetWidth) / cardWidth);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      updateSlider();
    }
  });
});