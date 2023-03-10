/*

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

// faccio partire un ciclo per stampare i quadrati
for(let i=0; i < 100; i++){
    let number = i;
    number += 1;
    switch(true){
        // se l'indice è sia multiplo di 3 che di che 5...
        case (((number % 3) == 0) && ((number % 5) == 0)):
            // allora stampo il blocco con contenuto "FizzBuzz"
            console.log(number, "FizzBuzz");
            break;
        // se l'indice è sia multiplo di 3...
        case (number % 3) == 0:
            // allora stampo il blocco con contenuto "Fizz"
            console.log(number, "Fizz");
            break;
        // se l'indice è sia multiplo di 5...
        case (number % 5) == 0:
            // allora stampo il blocco con contenuto "Buzz"
            console.log(number, "Buzz");
            break;
        // altrimenti...
        default:
            // stampo il blocco con contenuto "i"
            console.log(number);
            break;
    }
}