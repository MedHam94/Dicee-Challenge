// start the game
function playGame() {
    // get a random number for player1

    let player1 = Math.ceil(Math.random()*6  )

    // get a random number for player2

    let player2 = Math.ceil(Math.random()* 6 )
    console.log(player1,player2);
    // assign image based of the random number
    document.querySelector('.img1').setAttribute('src', `./images/dice${player1}.png`)

    document.querySelector('.img2').setAttribute('src', `./images/dice${player2}.png`)

    // compare the random numbers to decide the winner
    if (player1 > player2) {

        document.querySelector('h1').innerHTML = 'Player 1 has Won'
    } else if (player1 < player2) {
        document.querySelector('h1').innerHTML = 'Player 2 has Won'
    }else{
        document.querySelector('h1').innerHTML = 'Tied!!'
    }

}

playGame()
