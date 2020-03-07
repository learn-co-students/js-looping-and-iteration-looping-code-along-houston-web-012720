const gifts = ["teddy bear", "drone", "doll"];

function writeCards(people, event) {
  let arr = []
  for (let i = 0; i < people.length; i++) {
    arr.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
  }
  return arr
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}

