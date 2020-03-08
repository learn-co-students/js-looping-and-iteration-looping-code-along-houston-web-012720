// Code your solutions in this file
const writeCards = (array,name) => {
    let cardArray = [];
    for(let i = 0; i < array.length; i++){
        cardArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    }
    return cardArray
}

const countDown = (number) => {
    let i = number 
    while (i >= 0){
        console.log(i)
        i --
    }
}