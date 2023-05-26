const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');
var button_MudarEstado = document.getElementById('')

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
        onOff.textContent = 'Ligar';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.png';

}

function lampOnOff() {
    if (turnOnOff.textContent == 'Acender') {
        lampOn();
        turnOnOff.textContent = 'Apagar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Acender';
    }

}

function lampBrokenReset() {
    if (isLampBroken()) {
        lamp.src = './img/desligada.pnj';
        lampOff();
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);