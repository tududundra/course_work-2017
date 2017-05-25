var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "marginRight": 70,
  "dataProvider": [{
    "country": "Москва. На пути к Курскому вокзалу",
    "visits": 11.65,
    "color": "#468ccf"
  }, {
    "country": "Москва. Площадь Курского вокзала",
    "visits": 6.25,
    "color": "#FF9E01"
  }, {
    "country": "Москва. Ресторан Курского вокзала",
    "visits": 7.23,
    "color": "#FF9E01"
  }, {
    "country": "Москва. К поезду через магазин",
    "visits": 7.0,
    "color": "#FF9E01"
  }, {
    "country": "Москва — Серп и Молот",
    "visits": 8.83,
    "color": "#468ccf"
  }, {
    "country": "Серп и Молот — Карачарово",
    "visits": 3.5,
    "color": "#FF9E01"
  }, {
    "country": "Карачарово — Чухлинка",
    "visits": 8.47,
    "color": "#468ccf"
  }, {
    "country": "Чухлинка — Кусково",
    "visits": 5.76,
    "color": "#FF9E01"
  }, {
    "country": "Кусково — Новогиреево",
    "visits": 10.25, //9
    "color": "#468ccf"
  }, {
    "country": "Новогиреево — Реутово",
    "visits": 12.18,
    "color": "#468ccf"
  }, {
    "country": "Реутово — Никольское",
    "visits": 13.67,
    "color": "#468ccf"
  }, {
    "country": "Никольское — Салтыковская",
    "visits": 9.06,
    "color": "#468ccf"
  }, {
    "country": "Салтыковская — Кучино",
    "visits": 8.26,
    "color": "#FF9E01"
  },{
    "country": "Кучино — Железнодорожная",
    "visits": 7.86,
    "color": "#FF9E01"
  },{
    "country": "Железнодорожная — Черное",
    "visits": 8.91,
    "color": "#468ccf"
  },{
    "country": "Черное — Купавна",
    "visits": 11.63,
    "color": "#468ccf"
  },{
    "country": "Купавна — 33й километр",
    "visits": 12.9,
    "color": "#468ccf"
  },{
    "country": "33й километр — Электроугли",
    "visits": 12.65,
    "color": "#468ccf"
  },{
    "country": "Электроугли — 43й километр",
    "visits": 7.75, //19
    "color": "#FF9E01"
  },{
    "country": "43й километр — Храпуново",
    "visits": 10.05,
    "color": "#468ccf"
  },{
    "country": "Храпуново — Есино",
    "visits": 7.2,
    "color": "#FF9E01"
  },{
    "country": "Есино — Фрязево",
    "visits": 7.86,
    "color": "#FF9E01"
  },{
    "country": "Фрязево — 61й километр",
    "visits": 7.12,
    "color": "#FF9E01"
  },{
    "country": "61й километр — 65й километр",
    "visits": 7.83,
    "color": "#FF9E01"
  },{
    "country": "65й километр — Павлово—Посад",
    "visits": 7.49,
    "color": "#FF9E01"
  },{
    "country": "Павлово—Посад — Назарьево",
    "visits": 8.87,
    "color": "#468ccf"
  },{
    "country": "Назарьево — Дрезна",
    "visits": 11.16,
    "color": "#468ccf"
  },{
    "country": "Дрезна — 85й километр",
    "visits": 9.58,
    "color": "#468ccf"
  },{
    "country": "85й километр — Орехово—Зуево",
    "visits": 7.53, //29
    "color": "#FF9E01"
  },{
    "country": "Орехово—Зуево",
    "visits": 15.18,
    "color": "#468ccf"
  },{
    "country": "Орехово—Зуево — Крутое",
    "visits": 11.0,
    "color": "#468ccf"
  },{
    "country": "Крутое — Воиново",
    "visits": 8.38,
    "color": "#FF9E01"
  },{
    "country": "Воиново — Усад",
    "visits": 8.71,
    "color": "#468ccf"
  },{
    "country": "Усад — 105й километр",
    "visits": 7.4,
    "color": "#FF9E01"
  },{
    "country": "105й километр — Покров",
    "visits": 7.03,
    "color": "#FF9E01"
  },{
    "country": "Покров — 113й километр",
    "visits": 8.34,
    "color": "#FF9E01"
  },{
    "country": "113й километр — Омутище",
    "visits": 6.76,
    "color": "#FF9E01"
  },{
    "country": "Омутище — Леоново",
    "visits": 6.09,
    "color": "#FF9E01"
  },{
    "country": "Леоново — Петушки",
    "visits": 6.89, //39
    "color": "#FF9E01"
  },{
    "country": "Петушки. Перрон",
    "visits": 8.17,
    "color": "#FF9E01"
  },{
    "country": "Петушки. Вокзальная площадь",
    "visits": 9.83,
    "color": "#468ccf"
  },{
    "country": "Петушки. Садовое кольцо",
    "visits": 8.99,
    "color": "#468ccf"
  },{
    "country": "Петушки. Кремль.",
    "visits": 8.88,
    "color": "#468ccf"
  },{
    "country": "Москва—Петушки.",
    "visits": 10.89,
    "color": "#468ccf"
  }],
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left",
    "title": "Средняя длинна предложений"
  }],
  "startDuration": 1,
  "graphs": [{
    "balloonText": "<b>[[category]]: [[value]]</b>",
    "fillColorsField": "color",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "labelRotation": 90
  },
  "export": {
    "enabled": true
  }

});/**
 * Created by Александра on 24.05.2017.
 */
