```javascript
const immagini = document.querySelectorAll(".immagine-card");

let posizione = 1;


/*
    0 = sinistra
    1 = centro
    2 = destra
*/

function aggiornaPosizioni() {

    immagini.forEach((immagine, index) => {

        immagine.classList.remove("woosh");

        if (index === posizione) {

            immagine.className = "immagine-card centro";

        } else if (
            index === (posizione + 2) % 3
        ) {

            immagine.className = "immagine-card sinistra";

        } else {

            immagine.className = "immagine-card destra";

        }

    });

    /*
       Riattiva l'animazione woosh
    */

    setTimeout(() => {

        immagini[posizione].classList.add("woosh");

    }, 20);
}


/*
    Vai direttamente a una delle tre immagini
*/

function vaiA(numero) {

    if (numero === posizione) {
        return;
    }

    posizione = numero;

    aggiornaPosizioni();
}


/*
    Cliccando sulle immagini
*/

immagini.forEach((immagine, index) => {

    immagine.addEventListener("click", () => {

        vaiA(index);

    });

});


/*
    Cambio automatico ogni 4 secondi
*/

setInterval(() => {

    posizione++;

    if (posizione > 2) {
        posizione = 0;
    }

    aggiornaPosizioni();

}, 4000);


/*
    Avvio
*/

aggiornaPosizioni();
```
