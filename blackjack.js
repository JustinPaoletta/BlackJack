//ARRAY OF 52 CARDS THAT NEED SHUFFLED

let allCards = [{
        'cardPic': "./Deck Of Cards/2C.png",
        'cardValue': 2
    },
    {
        'cardPic': "./Deck Of Cards/2D.png",
        'cardValue': 2
    },
    {
        'cardPic': "./Deck Of Cards/2H.png",
        'cardValue': 2
    },
    {
        'cardPic': "./Deck Of Cards/2S.png",
        'cardValue': 2
    },
    {
        'cardPic': "./Deck Of Cards/3C.png",
        'cardValue': 3
    },
    {
        'cardPic': "./Deck Of Cards/3D.png",
        'cardValue': 3
    },
    {
        'cardPic': "./Deck Of Cards/3H.png",
        'cardValue': 3
    },
    {
        'cardPic': "./Deck Of Cards/3S.png",
        'cardValue': 3
    },
    {
        'cardPic': "./Deck Of Cards/4C.png",
        'cardValue': 4
    },
    {
        'cardPic': "./Deck Of Cards/4D.png",
        'cardValue': 4
    },
    {
        'cardPic': "./Deck Of Cards/4H.png",
        'cardValue': 4
    },
    {
        'cardPic': "./Deck Of Cards/4S.png",
        'cardValue': 4
    },
    {
        'cardPic': "./Deck Of Cards/5C.png",
        'cardValue': 5
    },
    {
        'cardPic': "./Deck Of Cards/5D.png",
        'cardValue': 5
    },
    {
        'cardPic': "./Deck Of Cards/5H.png",
        'cardValue': 5
    },
    {
        'cardPic': "./Deck Of Cards/5S.png",
        'cardValue': 5
    },
    {
        'cardPic': "./Deck Of Cards/6C.png",
        'cardValue': 6
    },
    {
        'cardPic': "./Deck Of Cards/6D.png",
        'cardValue': 6
    },
    {
        'cardPic': "./Deck Of Cards/6H.png",
        'cardValue': 6
    },
    {
        'cardPic': "./Deck Of Cards/6S.png",
        'cardValue': 6
    },
    {
        'cardPic': "./Deck Of Cards/7C.png",
        'cardValue': 7
    },
    {
        'cardPic': "./Deck Of Cards/7D.png",
        'cardValue': 7
    },
    {
        'cardPic': "./Deck Of Cards/7H.png",
        'cardValue': 7
    },
    {
        'cardPic': "./Deck Of Cards/7S.png",
        'cardValue': 7
    },
    {
        'cardPic': "./Deck Of Cards/8C.png",
        'cardValue': 8
    },
    {
        'cardPic': "./Deck Of Cards/8D.png",
        'cardValue': 8
    },
    {
        'cardPic': "./Deck Of Cards/8H.png",
        'cardValue': 8
    },
    {
        'cardPic': "./Deck Of Cards/8S.png",
        'cardValue': 8
    },
    {
        'cardPic': "./Deck Of Cards/9C.png",
        'cardValue': 9
    },
    {
        'cardPic': "./Deck Of Cards/9D.png",
        'cardValue': 9
    },
    {
        'cardPic': "./Deck Of Cards/9H.png",
        'cardValue': 9
    },
    {
        'cardPic': "./Deck Of Cards/9S.png",
        'cardValue': 9
    },
    {
        'cardPic': "./Deck Of Cards/10C.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/10D.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/10H.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/10S.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/AC.png",
        'cardValue': 11,

    },
    {
        'cardPic': "./Deck Of Cards/AD.png",
        'cardValue': 11,

    },
    {
        'cardPic': "./Deck Of Cards/AH.png",
        'cardValue': 11,

    },
    {
        'cardPic': "./Deck Of Cards/AS.png",
        'cardValue': 11,
    },
    {
        'cardPic': "./Deck Of Cards/JC.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/JD.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/JH.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/JS.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/KC.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/KD.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/KH.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/KS.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/QC.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/QD.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/QH.png",
        'cardValue': 10
    },
    {
        'cardPic': "./Deck Of Cards/QS.png",
        'cardValue': 10
    }
]


//SHUFFLE THE ARRAY OF CARDS EACH TIME THE PAGE LOADS

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
}

shuffle(allCards);

//-----------------------------------------------------------------------------



//GLOBAL VARIABLES THAT HOLD THE CARD OBJECT SO I CAN ACCESS THE PIC AND VALUES

let playerHand = [];
let dealerHand = [];

let dealerValues = [];
let playerValues = [];

let dealerScore = 0
let playerScore = 0


//REDUCE ARRAY FUNCTION TO CALCULATE THE SCORES OF THE PLAYER AND DEALER 
function sumArray(a, b) {
    return a + b
}
//------------------------------------------------------------------------------




//DEAL FIRST HAND AND CHECK IF ANYONE HAS BLACKJACK

document.getElementById('deal').addEventListener('click', () => {

    if (allCards.length <= 2) {
        clearBoard();
    }

    $('#deal').css('visibility', 'hidden')
    $('#hit-button').css('display', 'block')
    $('#stay-button').css('display', 'block')

    let card1 = allCards.pop();
    let card2 = allCards.pop();
    let card3 = allCards.pop();
    let card4 = allCards.pop();

    playerHand.push(card1);
    playerHand.push(card2);

    dealerHand.push(card3);
    dealerHand.push(card4);


    playerValues.push(playerHand[0]['cardValue'])
    playerValues.push(playerHand[1]['cardValue'])
    dealerValues.push(dealerHand[0]['cardValue'])
    dealerValues.push(dealerHand[1]['cardValue'])

    $('#dealtCard1').attr('src', playerHand[0]['cardPic'])
    $('#dealtCard1B').attr('src', 'blue_back.png')
    $('#dealtCard2').attr('src', dealerHand[0]['cardPic'])
    $('#dealtCard2B').attr('src', 'blue_back.png')

    // REVEAL FACEDOWN PLAYER CARD BY HOVERING OVER IT

    document.getElementById('dealtCard1B').addEventListener('mouseover', () => {
        $('#dealtCard1B').attr('src', playerHand[1]['cardPic'])
    });

    document.getElementById('dealtCard1B').addEventListener('mouseout', () => {
        $('#dealtCard1B').attr('src', 'blue_back.png')
    });

    // -------------------------------------

    dealerScore = dealerValues.reduce(sumArray);
    playerScore = playerValues.reduce(sumArray);

    console.log(playerScore, dealerScore)

    if ((dealerScore === 21) && (playerScore === 21)) {
        alert('You Both Got BlackJack!  Its A Push!');
        clearHand()
    } else if (dealerScore === 21) {
        alert('House Got BlackJack!');
        clearHand()
    } else if (playerScore === 21) {
        alert('YOU Got BlackJack!');
        clearHand()
    }

})
//----------------------------------------------------------------------------


//PLAYERS TURN 

function calcPlayerScore() {
    playerScore = playerValues.reduce(sumArray);
    playerValues.forEach((item, i) => {
        if ((item === 11) && (playerScore > 21)) playerValues[i] = 1;
    });
    playerScore = playerValues.reduce(sumArray)
}

// CLICK HIT TO GIVE PLAYER ANOTHER CARD

document.getElementById('hit-button').addEventListener('click', () => {

    if (allCards.length <= 2) {
        clearBoard();
    }


    let newCard = allCards.pop();
    playerHand.push(newCard);
    console.log(playerHand)

    if (playerHand.length === 2) {
        calcPlayerScore()
    }

    if (playerHand.length === 3) {
        $('#dealtCard1C').attr('src', playerHand[2]['cardPic']);
        playerValues.push(playerHand[2]['cardValue']);
        console.log(playerScore = playerValues.reduce(sumArray) + ' is my score');
        calcPlayerScore()
    }

    if (playerHand.length === 4) {
        $('#dealtCard1D').attr('src', playerHand[3]['cardPic']);
        playerValues.push(playerHand[3]['cardValue']);
        console.log(playerScore = playerValues.reduce(sumArray) + ' is my score')
        calcPlayerScore()
    }

    if (playerHand.length === 5) {

        document.getElementById('hit-button').style.display = 'none';
        $('#dealtCard1E').attr('src', playerHand[4]['cardPic']);
        playerValues.push(playerHand[4]['cardValue']);
        console.log(playerScore = playerValues.reduce(sumArray) + ' is my score');
        calcPlayerScore()

        if (playerScore < 21) {
            alert("You Got 5 Cards And Didn't Bust! You Win!")
        }

        clearHand();
    }

    if (playerScore > 21) {
        console.log(playerValues)
        alert(`You Busted With A Score Of ${playerScore}`)
        clearHand()
    } else if (playerScore === 21) {
        alert("You Got BlackJack!")
        clearHand()
    }

});

// STAY BUTTON CLICKED TO END PLAYERS TURN

document.getElementById('stay-button').addEventListener('click', () => {
    $('#hit-button').css('display', 'none')
    $('#stay-button').css('display', 'none')
    $('#dealer-button').css('display', 'block')
});
//----------------------------------------------------------------------------



//DEALERS TURN

function calcDealerScore() {
    dealerScore = dealerValues.reduce(sumArray);
    dealerValues.forEach((item, i) => {
        if ((item === 11) && (dealerScore > 21)) dealerValues[i] = 1;
    });
    dealerScore = dealerValues.reduce(sumArray)
    console.log(`The Dealer Has ${dealerScore}`)
}

document.getElementById('dealer-button').addEventListener('click', () => {

    if (allCards.length <= 2) {
        clearBoard();
    }

    if (dealerHand.length === 2) {
        calcDealerScore()
    }

    if (dealerScore < 17) {
        let newCard = allCards.pop();
        dealerHand.push(newCard);
        console.log(dealerHand)

    } else {
        calcDealerScore()

        if (dealerScore === playerScore) {
            alert(`We have a Push! Both Players Had ${dealerScore}`);
            clearHand()
        } else if (dealerScore === 21) {
            alert("The Dealer Got BlackJack!")
            clearHand()
        } else if (dealerScore > 21) {
            alert(`The Dealer Busted! With ${dealerScore}`)
            clearHand()
        } else if ((dealerScore < 21) && (dealerScore > playerScore)) {
            alert(`Dealer wins with ${dealerScore} --- Player1 only had ${playerScore}`)
            clearHand()
        } else {
            alert(`Player 1 wins with ${playerScore} --- Dealer only had ${dealerScore}`)
            clearHand()
        }
    }

    calcDealerScore()

    if (dealerHand.length === 3) {
        $('#dealtCard2C').attr('src', dealerHand[2]['cardPic']);
        dealerValues.push(dealerHand[2]['cardValue']);
        calcDealerScore()
    }

    if (dealerHand.length === 4) {
        $('#dealtCard2D').attr('src', dealerHand[3]['cardPic']);
        dealerValues.push(dealerHand[3]['cardValue']);
        calcDealerScore()
    }

    if (dealerHand.length === 5) {
        document.getElementById('hit-button').style.display = 'none';
        $('#dealtCard2E').attr('src', dealerHand[4]['cardPic']);
        dealerValues.push(dealerHand[4]['cardValue']);
        calcDealerScore();

        if (dealerScore < 21) {
            alert("The Dealer Got 5 Cards Without Busting! They Win!")
        }else{
            alert(`The Dealer Busted with ${dealerScore}!`)
        }
        clearHand();
    }
});

//----------------------------------------------------------------------



// CLEAR STUFF 


//OUT OF CARDS RELOAD AND SHUFFLE
function clearBoard() {
    alert('Not Enough Cards , Reshuffling');
    location.reload('index.html');
}


//END OF HAND RESET VARIABLES AND DISPLAY BUT MAINTAIN VALUE OF ALLCARDS ARRAY
function clearHand() {

    dealerHand = [];
    playerHand = [];
    playerValues = [];
    dealerValues = [];
    hitCount = 1;
    dealerCount = 1;

    $('#dealer-button').css('display', 'none')
    $('#hit-button').css('display', 'none')
    $('#stay-button').css('display', 'none')
    $('#deal').css('visibility', 'visible')

    $('#dealtCard1').attr('src', 'green.jpg');
    $('#dealtCard1B').attr('src', 'green.jpg');
    $('#dealtCard1C').attr('src', 'green.jpg');
    $('#dealtCard1D').attr('src', 'green.jpg');
    $('#dealtCard1E').attr('src', 'green.jpg');

    $('#dealtCard2').attr('src', 'green.jpg');
    $('#dealtCard2B').attr('src', 'green.jpg');
    $('#dealtCard2C').attr('src', 'green.jpg');
    $('#dealtCard2D').attr('src', 'green.jpg');
    $('#dealtCard2E').attr('src', 'green.jpg');

}

//----------------------------------------------------------------------------