
ymaps.ready(init);
function init () {
    var myMap = new ymaps.Map("map", {
            center: [59.96, 30.30],
            zoom: 10
        }),

       

        myPlacemark2 = new ymaps.Placemark([59.96, 30.30], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: '../img/metka.svg',
            // Размеры метки.
            iconImageSize: [40, 34],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -34]
        });
    
    myMap.controls.add('smallZoomControl');
    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark2)
}

