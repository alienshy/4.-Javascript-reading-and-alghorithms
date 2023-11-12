//////1. Funksiya yazacaqsız, funksiya 2 parametr qəbul edir, 1-cisi array 2-cisi number (ex. myFunc([1,2,3,4,5], 4))
//////Həmin funksiyanın nəticəsi 0-cı indeks-dən number-in sayı qədər array-in içindən ədədləri götürüb yeni array-ə yığmalısız (myFunc([1,2,3,4,5], 4) => [1,2,3,4])

let array = [1, 2, 3, 4,5]
let yeniarray = []

myFunction = (array, number) =>{
    for(let i = 0; i < number; i++){
        yeniarray.push(array[i])
    }
    console.log(yeniarray)
}
myFunction(array, 4)



////////2. findMultiples adlı funksiya yazacaqsız, 2 number parametri alır (ex. findMultiples(number, limit)) - number-dan limitə qədər limitdə daxil olmaqla yeni array-ə number-in 2-yə hasillərini əlavə edəcəksiz, taki limitə çatana qədər.
//////////(ex findMultiples(2, 6) = > result = [2, 4] or findMultiples(5, 30) = > result = [5, 10, 20])


let arraym = []
findMultiples = (number, limit) =>{
    for(let i = number; i <= limit; i*=2){
        arraym.push(i)
    }
    console.log(arraym)
}
findMultiples(2,6)



////////Count funksiyası verilir, 1 number parametri alır, 1-dən həmin number-a qədər yeni array yaradın
////////(ex. count(10) => result = [1,2,3,4,5,6,7,8,9,10])
function Count(number) {
    let bosluq = [];
    for (let i = 1; i <= number; i++) {
        bosluq.push(i);
    }
    return bosluq;
}
const bosluq = Count(8);
console.log(bosluq);
