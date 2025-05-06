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