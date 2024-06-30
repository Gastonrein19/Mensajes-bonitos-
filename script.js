const maxEntries = 10;

function showOption(option) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('input-area').classList.remove('hidden');
    if (option === 'numbers') {
        document.getElementById('number-section').classList.remove('hidden');
        document.getElementById('name-section').classList.add('hidden'); // Oculta la sección de nombres si se muestra la de números
    } else if (option === 'names') {
        document.getElementById('name-section').classList.remove('hidden');
        document.getElementById('number-section').classList.add('hidden'); // Oculta la sección de números si se muestra la de nombres
    }
}

function addNumberInput() {
    const numberInputs = document.getElementById('number-inputs');
    if (numberInputs.children.length < maxEntries) {
        const input = document.createElement('input');
        input.type = 'number';
        input.style.color = 'black'; // Color de texto negro para los inputs
        numberInputs.appendChild(input);
    } else {
        alert('No se pueden agregar más de 10 números.');
    }
}

function addNameInput() {
    const nameInputs = document.getElementById('name-inputs');
    if (nameInputs.children.length < maxEntries) {
        const input = document.createElement('input');
        input.type = 'text';
        input.style.color = 'black'; // Color de texto negro para los inputs
        nameInputs.appendChild(input);
    } else {
        alert('No se pueden agregar más de 10 nombres.');
    }
}

function shuffleAndDisplay() {
    const numbers = Array.from(document.getElementById('number-inputs').children)
        .map(input => input.value)
        .filter(value => value !== '');
    const names = Array.from(document.getElementById('name-inputs').children)
        .map(input => input.value)
        .filter(value => value !== '');

    const combinedArray = [...numbers, ...names];

    if (combinedArray.length === 0) {
        alert('Por favor, ingrese al menos un número o nombre.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * combinedArray.length);
    const result = combinedArray[randomIndex];

    document.getElementById('result').innerText = `Resultado: ${result}`;
    document.getElementById('result').style.display = 'block'; // Asegura que el resultado sea visible
    document.getElementById('reset-button').style.display = 'block';
}

function resetGame() {
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('input-area').classList.add('hidden');
    document.getElementById('number-section').classList.add('hidden');
    document.getElementById('name-section').classList.add('hidden');
    document.getElementById('number-inputs').innerHTML = '';
    document.getElementById('name-inputs').innerHTML = '';
    document.getElementById('result').innerText = '';
    document.getElementById('result').style.display = 'none'; // Oculta el resultado al reiniciar
    document.getElementById('reset-button').style.display = 'none';
}