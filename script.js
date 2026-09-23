const immagini = document.querySelectorAll(".immagine-card");

let posizione = 1;


// Aggiorna la posizione delle immagini
function aggiornaPosizioni() {

    immagini.forEach((immagine, index) => {

        immagine.classList.remove("woosh");

        if (index === posizione) {

            immagine.className = "immagine-card centro";

        } else if (index === (posizione + 2) % 3) {

            immagine.className = "immagine-card sinistra";

        } else {

            immagine.className = "immagine-card destra";

        }

    });

    // Effetto woosh
    setTimeout(() => {
        immagini[posizione].classList.add("woosh");
    }, 20);
}


// Quando clicchi un'immagine
immagini.forEach((immagine, index) => {

    immagine.addEventListener("click", () => {

        // Se è già al centro non fare niente
        if (index === posizione) {
            return;
        }

        posizione = index;

        aggiornaPosizioni();

    });

});


// Avvio iniziale
aggiornaPosizioni();
