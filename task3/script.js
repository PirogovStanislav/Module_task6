const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightE2 = document.querySelector('#trafficLight1');
const trafficLightE3 = document.querySelector('#trafficLight2');


function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeYellow);
    

   
}

trafficLightEl.addEventListener('click', makeRed);

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);


    
}

trafficLightE2.addEventListener('click', makeYellow);

function makeGreen() {
    trafficLightE3.style.background = ('green');
    trafficLightE3.removeEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeRed);

}

trafficLightE3.addEventListener('click', makeGreen);



