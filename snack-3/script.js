const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

//prendo ogni elemento dell'array, lo trasformo (quindi uso map) e ne creo uno nuovo 
const numbersResult = numbers.map((number)=>{
    return number + 1;
});
console.log(numbersResult);

// Risultato: [3, 9, 5, 8, 3, 88]