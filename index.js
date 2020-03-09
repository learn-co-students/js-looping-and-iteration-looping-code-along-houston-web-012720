// Code your solutions in this file
// array = ["Lisa", "Kaitlin", "Jan"]
// event = 'surprise'
function writeCards(array, event) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray
}


function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(i++)
    }

}
