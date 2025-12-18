const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

//In questo caso uso filter, voglio prendere solo alcuni elementi con una data condizione(essere pari) ma non trasformarli
const evenNums = nums.filter((numbers) =>{
    if(numbers % 2 === 0){
        return true;
    } else{
        return false;
    }

});

console.log(evenNums);


// Risultato: [2, 8, 4, 12]