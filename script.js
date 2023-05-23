const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
var button_MudarEstado= document.getElementById('')

function isLampBrokem() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBrokem()) {
        lamp.src = './img/ligada.png';
    }
}

function lampOff() {
    if (!isLampBrokem()) {
        lamp.src = './img/desligada.png';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.png';

}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);