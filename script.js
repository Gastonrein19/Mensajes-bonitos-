const panda = document.getElementById('panda');
const gameArea = document.getElementById('game-area');
const message = document.getElementById('message');
const selector = document.getElementById('selector');

let posX = 0;
let posY = 0;
let velX = 2;
let velY = 2;

const pandaUrls = {
    'panda-mimoso': 'https://media.tenor.com/-Qq0R9rKNzUAAAAi/panda-bear.gif',
    'panda-esconde': 'https://media.tenor.com/Zyd2BmUX_gQAAAAi/panda-gifts-panda.gif',
    'panda-golpea': 'https://media.tenor.com/JvqTMYLUzokAAAAi/saltobears.gif',
    'panda-corriendo': 'https://media.tenor.com/KDqnVi_7tZoAAAAi/panda-love.gif',
    'panda-corazon': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi2vAy4KCdQRKwFqJeCfV8FcbY-yeKi-n8Sx5WR_rqmKs_4M4pmXQwaoTXDgeqnXuOPPakLd2wf6Vgw8vPXWaDfKotn8pAXLotSQo7VQfUPeFyav_O3I6sMzaL_ItCRk0sTwSPpnKEBG29/s1600/transp+gif.gif'
};

const messages = [
    "Nuestros momentos juntos siempre son especiales ✨",
    "Gracias por estar siempre ahí, haciendo mi vida mejor 💖",
    "Eres una parte fundamental de mi vida, y lo aprecio mucho 🌟",
    "Tu compañía es lo que más valoro en este mundo 🌼",
    "Cada día contigo es una aventura que nunca olvidaré 😊",
    "Te quiero mucho 💕"
];

let originalSrc = pandaUrls['panda-corriendo'];
let tempSrc = pandaUrls['panda-corazon'];

function selectPanda(type, button) {
    originalSrc = pandaUrls[type];
    highlightSelected(button, 'dropdown-content-1');
}

function selectTempPanda(type, button) {
    tempSrc = pandaUrls[type];
    highlightSelected(button, 'dropdown-content-2');
}

function highlightSelected(button, dropdownId) {
    const buttons = document.querySelectorAll(`#${dropdownId} button`);
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function startGame() {
    selector.style.display = 'none';
    gameArea.style.display = 'block';
    panda.src = originalSrc;
    movePanda();
}

function backToStart() {
    gameArea.style.display = 'none';
    selector.style.display = 'flex';
    posX = 0;
    posY = 0;
    velX = 2;
    velY = 2;
}

function movePanda() {
    posX += velX;
    posY += velY;

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

    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);

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