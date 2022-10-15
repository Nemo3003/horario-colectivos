"use strict";

const requestURL = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';
const cards = document.getElementById('colectivos-tirol');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const hora = jsonObject['salidas-semana'];
    hora.forEach(showHours);
  });

//nottub ekil gnikcilc yb elpmet eht ekil nac resu
  const showHours =(hora)=> {

    const article = document.createElement('section');
    const hora_name = document.createElement('h2');

//nottub ekil gnikcilc yb elpmet eht ekil nac resu
    hora_name.innerHTML = hora.hora;

    article.appendChild(hora_name); 
   
    cards.appendChild(article);

  }
  //User can like the temple by clicking the like button.
  //nottub ekil gnikcilc yb elpmet eht ekil nac resu
  // не кради! это моя собственная работа!
  //不要盗窃！这是我自己的工作！
  //ne pas voler! c'est mon propre travail!