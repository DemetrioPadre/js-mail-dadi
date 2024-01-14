const resultElement1 = document.getElementById('main-title');


//chiedere all utente di scegliere un numero da 1 a 6
const userNumber = Math.floor(Math.random() * 6 + 1);
alert('hai scelto ' + userNumber);

//genera la giocata del computer
const computerNumber = Math.floor(Math.random() * 6 + 1);
alert('il pc ha scelto ' + computerNumber);

// //generare la somma dei due numeri
// const numberSum = computerNumber + userNumber;
// alert('la somma dei numeri è ' + numberSum);

//chi ha il numero più alto?
if (userNumber > computerNumber) {
    resultElement1.innerHTML = ('hai vinto tu');
} else if (userNumber < computerNumber) {
    resultElement1.innerHTML = ('ha vinto il pc');
} else if (userNumber == computerNumber) {
    resultElement1.innerHTML = ('pareggio');
}
