"use strict";

const apiURL = "../db/hrTirRes.json";
fetch(apiURL)
    .then((response) => response.json())
    .then((data) => Cards (data.results));

const Cards = (newData) =>{
        const cardWrapper = document.querySelector("#colectivos-tirol")
        newData.forEach(character =>{
            let div = document.createElement("div");
            let name = document.createElement("h2");//name
           
            //Assigned values to the elements
            name.innerHTML = character.hora;
            
            //Assigned classes to the elements
           
            name.classList.add("name");
           
            div.appendChild(name);
           
            //Appended the div to the cardWrapper
            cardWrapper.appendChild(div);

            },
        )
       
    }
Cards()