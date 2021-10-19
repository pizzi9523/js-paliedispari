// Chiedere all'utente di inserire un parola
const user_word = prompt("Inserisci una parola");


//Creare una funzione per capire se la parola inserita è palindroma

//Creo la funzione
function palindromVerify(word) {
    let word_inverse = "";
    //inverto la parola
    for (let i = word.length - 1; i >= 0; i--) {
        word_inverse += word[i]
    }
    //console.log(word_inverse);
    //confronto la parola invertita con quella inserita
    if (word == word_inverse) {
        return true;
    }
    return false;

}

//richiamo la funzione dentro un if per stampare il risultato della verifica
if (palindromVerify(user_word)) {
    console.log(`La parola ${user_word} è palindroma`);
}
else {
    console.log(`La parola ${user_word} non è palindroma`);
}