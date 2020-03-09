 
function writeCards(nameArray, event) {
    let eventcard = []
    for (let i = 0; i < nameArray.length; i++){
        eventcard.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
    
    }
    return eventcard
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }