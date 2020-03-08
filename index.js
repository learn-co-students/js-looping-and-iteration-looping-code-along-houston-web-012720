// Code your solutions in this file

function writeCards(listnames, event) {
    let array1 = []
    for (let i = 0; i < listnames.length; i++) {
        array1.push(`Thank you, ${listnames[i]}, for the wonderful ${event} gift!`)
    }
    return array1
}


function countDown(integer) {

    let i = integer;
    while (i >= 0) {
        console.log(i)
        i--
    }
}