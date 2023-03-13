let numberToGuess = Math.floor(Math.random() * 1000)
console.log('Я загадал:', numberToGuess)

while (true) {
    const numberFromUser = prompt('Введите число от 0 до 999:')
    console.log('Вы ввели:', numberFromUser)

    if (numberFromUser === 'q') {
        break;
    }
    if (isNaN(+numberFromUser) || (+numberFromUser < 0 || +numberFromUser > 999)) {
        alert("Вы ввели не число от 0 до 999")
    } else if (numberFromUser == numberToGuess) {
        alert("Вы угадали!");
        break;
    } else if (numberFromUser <= numberToGuess) {
        alert("Ваше число меньше моего")
    } else {
        alert("Ваше число больше моего")
    }
}