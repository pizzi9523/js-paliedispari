//L'utente sceglie pari o dispari
let user_choice = "";
while (user_choice != "pari" && user_choice != "dispari") {
    user_choice = prompt("Scegli pari o dispari").toLowerCase();
}
//console.log(user_choice);


//inserisce un numero da 1 a 5
const user_number = Number(prompt("Inserisci un numero da 1 a 5"))
//console.log(user_number);

//generiamo un numero random da 1 a 5 usando una funzione per il computer
function randomNumber_1_5() {
    let random_number = Math.floor(Math.random() * 5) + 1
    //console.log(random_number);
    return random_number;
}

//assegno un numero casuale al pc tramite la funzione creata randomNumber_1_5()
const pc_number = randomNumber_1_5();
//console.log(pc_number);

//sommiamo i due numeri
let sum = pc_number + user_number;
//console.log(sum);

//Stabiliamo se la somma dei 2 numeri è pari o dispari usando una funzione

function pariDispari(number) {
    if (number % 2 == 0) {
        return "pari"
    }
    return "dispari"
}

//Dichiariamo chi ha vinto
console.log(`User sceglie ${user_choice} e lancia ${user_number}`);
console.log(`Il pc sceglie ${pc_number}`);
console.log(`La somma dei due numeri è ${sum}`);

if (user_choice == pariDispari(sum)) {
    console.log("User Wins");
} else {
    console.log("Pc Wins");
}