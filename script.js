const panda = document.getElementById('panda');
const gameArea = document.getElementById('game-area');
const message = document.getElementById('message');

let posX = 0;
let posY = 0;
let velX = 2;
let velY = 2;
let originalSrc = "https://media.tenor.com/KDqnVi_7tZoAAAAi/panda-love.gif";
let tempSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi2vAy4KCdQRKwFqJeCfV8FcbY-yeKi-n8Sx5WR_rqmKs_4M4pmXQwaoTXDgeqnXuOPPakLd2wf6Vgw8vPXWaDfKotn8pAXLotSQo7VQfUPeFyav_O3I6sMzaL_ItCRk0sTwSPpnKEBG29/s1600/transp+gif.gif";

function movePanda() {
    posX += velX;
    posY += velY;

    // Cambiar dirección si toca los extremos
    if (posX + panda.clientWidth >= window.innerWidth || posX <= 0) {
        velX = -velX;
    }
    if (posY + panda.clientHeight >= window.innerHeight || posY <= 0) {
        velY = -velY;
    }

    panda.style.left = posX + 'px';
    panda.style.top = posY + 'px';

    requestAnimationFrame(movePanda);
}

function changeImageTemporarily() {
    panda.src = tempSrc;
    setTimeout(() => {
        panda.src = originalSrc;
    }, 3000);

    // Mostrar mensaje
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);

    // Crear corazones continuamente durante 3 segundos
    let heartInterval = setInterval(createHeart, 200);
    setTimeout(() => {
        clearInterval(heartInterval);
    }, 3000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    gameArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

panda.addEventListener('click', changeImageTemporarily);
movePanda();
huc
