/**
 * Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan dari 1 hingga N. Contohnya, jika N
 * adalah 5, maka fungsi akan mencetak 15 (1 + 2 + 3 + 4 + 5 = 15). 
 */ 

function sumValue(N) {
    let result = 0;
    for (let i = 1; i <= N; i++){
        result = result + i;
    }
    console.log(result);
}

sumValue(5);