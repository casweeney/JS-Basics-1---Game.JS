let bets = [];

function addBet(bet) {
    bets.push(bet);
}

let generateRandomNum = () => {
    return Math.floor(Math.random() * 1000 + 1);
}

let getWinner = () => {
    let winNum = generateRandomNum();
    let closest = 1001;
    let currWinner = 0; // index into bets array
    console.log("Winning number is: " + winNum);

    for(i=0; i<bets.length; i++) {
        let diff = Math.abs(bets[i].value - winNum)
        if(diff < closest){
            closest = diff;
            currWinner = i;
        }
    }

    return bets[currWinner];
}

let clearBets = () => {
    bets = [];
}

// addBet({name: "Jack", value: 500});
// addBet({name: "Dan", value: 50});
// console.log(bets);
// console.log("Winner is " + getWinner().name);