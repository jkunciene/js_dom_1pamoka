const pavadinimas = document.getElementById('antraste');
console.log(pavadinimas);

const link = document.querySelector('a');
console.log(link);
link.textContent = "Spausk, skaityk dokumentacija";
link.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute';

const vieta = document.querySelector('section');
const elementas = document.createElement('p');
elementas.textContent = "Mokomes tiek, kiek reikes, bet suprasta turime sia tema";
vieta.appendChild(elementas);

let pMasyvas = document.querySelectorAll('p');

for(let i=0; i<pMasyvas.length; i++){
    pMasyvas[i].style.color = "red";
}

const inputValue = document.getElementById('myInput');
console.log(inputValue)
const myButton = document.querySelector('button');
console.log(myButton)
let place = document.getElementById('place');
console.log(place)

myButton.addEventListener("click", addValue);

function addValue(){
    console.log("labas")
    const tempVar = document.createElement('p');
    tempVar.innerText = inputValue.value;
    console.log(inputValue.value)
    place.appendChild(tempVar);
}

