const inviaElement = document.getElementById('invia');
const emailElement = document.getElementById('email');
const controlloElement = document.getElementById('controllo');
const list = ['demetriopadre@gmail.com', 'mariobianchi@gmail.com', 'ilvicinoemionemico@tiscali.it'];

inviaElement.addEventListener('click', function () {
    const mail = emailElement.value;
    for (let i = 0; i <= list.length; i++) {
        if (mail == list[i]) {
            controlloElement.innerText = ('sei dentro');

            break;

        }
        else {
            controlloElement.innerText = ('accesso negato');
        }
    }

});



