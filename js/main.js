document.addEventListener('DOMContentLoaded', function() {
    const carImage = document.getElementById('car-image');
    const pricingOptions = document.getElementById('pricing-options');
    
    // Координаты и размеры зон (в % от изображения)
    const areas = [
        { 
            name: "Капот",
            shape: "poly",
            coords: [1,1, 5,1, 5,100, 0,100, 5,100],
            color: "rgba(255, 0, 179, 0.3)"
        },
        {
            name: "Дверь",
            shape: "poly",
            coords: [40,40, 60,35, 65,60, 45,65],
            color: "rgba(255,0,0,0.3)"
        }
    ];

    // Создаём интерактивные зоны
    areas.forEach(area => {
        const div = document.createElement('div');
        div.className = 'highlight-area';
        div.dataset.part = area.name;
        div.style.clipPath = `polygon(${area.coords.map((v,i) => 
            i%2 === 0 ? `${v}%` : `${v}%`).join(', ')})`;
        div.style.backgroundColor = area.color;
        div.style.width = '50%';
        div.style.height = '100%';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        
        div.addEventListener('click', function() {
            showPricingOptions(area.name);
        });
        
        document.getElementById('car-container').appendChild(div);
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
        
        // Добавляем обработчик для кнопки
        document.querySelector('.buy-btn').addEventListener('click', function() {
            alert(`Вы выбрали размещение на ${partName}!`);
        });
    }
});

<script>
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
    indicatorsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.indicator');

  // Обновление фото и точек
  function updateGallery(index) {
    currentIndex = index;
    currentImg.src = imagesData[index].src;
    desc.textContent = imagesData[index].desc;

    // Обновляем активную точку
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // Обработчик клика по точкам
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      updateGallery(parseInt(dot.dataset.index));
    });
  });
</script>

