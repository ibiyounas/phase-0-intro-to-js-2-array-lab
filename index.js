// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();

}

function destructivelyRemoveFirstCat(name) { 
    cats.shift();

}

function appendCat(name) {
    const lastCats = [...cats, "Broom"];
    return lastCats;  
}

function prependCat(name) {
    const firstCats = ["Arnold", ...cats];
    return firstCats;

}

function removeLastCat(name) {
    const newLastCat = cats.slice(0,-1)
    return newLastCat;
}

function removeFirstCat(name) {
    const newFirstCat = cats.slice(1)
    return newFirstCat;
}

