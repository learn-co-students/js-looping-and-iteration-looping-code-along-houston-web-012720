// Code your solutions in this file

function writeCards(arr) {
  let i = 0
  while(i < arr.length){
    arr [i] = (`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
    i++
  }
  return arr
}

function countDown(number) {
  for(let i = number; i >= 0; i--){
    console.log(i)
  }
}