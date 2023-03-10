/*

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

// raccolgo la row
const rowEl = document.querySelector("#app_main .row");

// faccio partire un ciclo per stampare i quadrati
for (let i = 0; i < 100; i++) {
    let number = i;
    number += 1;
    switch (true) {
        // se l'indice è sia multiplo di 3 che di che 5...
        case (((number % 3) == 0) && ((number % 5) == 0)):
            // allora stampo il blocco con contenuto "FizzBuzz"
            //console.log(number, "FizzBuzz");
            rowEl.innerHTML += `
            <div class="col-3 col-md-2 col-lg-1">
                <div class="box text-center ms-bg-danger">
                    FizzBuzz
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
            `
            break;
        // se l'indice è sia multiplo di 3...
        case (number % 3) == 0:
            // allora stampo il blocco con contenuto "Fizz"
            //console.log(number, "Fizz");
            rowEl.innerHTML += `
            <div class="col-3 col-md-2 col-lg-1">
                <div class="box text-center ms-bg-success">
                    Fizz
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
            `
            break;
        // se l'indice è sia multiplo di 5...
        case (number % 5) == 0:
            // allora stampo il blocco con contenuto "Buzz"
            //console.log(number, "Buzz");
            rowEl.innerHTML += `
            <div class="col-3 col-md-2 col-lg-1">
                <div class="box text-center ms-bg-alert">
                    Buzz
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
            `
            break;
        // altrimenti...
        default:
            // stampo il blocco con contenuto "i"
            //console.log(number);
            rowEl.innerHTML += `
            <div class="col-3 col-md-2 col-lg-1">
                <div class="box text-center ms-bg-secondary">
                    ${number}
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
            `
            break;
    }
}