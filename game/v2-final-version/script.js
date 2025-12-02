(function(){
    'use strict';
    console.log('reading js');

    const bodybackground = document.querySelector('body');

    /* start screen */
    const startSection = document.querySelector('#start');
    const startGameButton = document.querySelector('#start-game');

    /* game section */
    const gameSection = document.querySelector('#game');
    const quitGame = document.querySelector('#quitgame');

    /* target number */
    const targetcard1 = document.querySelector('#targetcard1');
    const targetcard2 = document.querySelector('#targetcard2');
    const targetcard3 = document.querySelector('#targetcard3');
    const targetcard4 = document.querySelector('#targetcard4');
    const showTargetNumber = document.querySelector('#showTargetNumber');
    const targetNumberappend = document.querySelectorAll('.targetNumber');

    /* scores */
    const scoreSection = document.querySelector('#score');
    const player1score = document.querySelector('#player1score');
    const player2score = document.querySelector('#player2score');

    /* rounds popup*/
    const round = document.querySelectorAll('.round');
    const roundPosition = document.querySelector('#round-position');
    const roundNotificationSection = document.querySelector('#roundNotification');
    const blackbg = document.querySelector('.popup-overlay');

    /* cards and dealing cards */
    const cardPlaced = document.querySelectorAll('.card');
    const mainCard = document.querySelectorAll('.main-card');

    const player1card1 = document.querySelector('#card1');
    const player1card2 = document.querySelector('#card2');
    const player2card1 = document.querySelector('#card3');
    const player2card2 = document.querySelector('#card4');

    const cardPlacedDealStay = document.querySelector('#dealcardsStay');
    const cardPlacedDeal = document.querySelectorAll('.scorecard');

    const playerbuttons = document.querySelector('#playerbuttons');
    const player1buttons = document.querySelector('#player1options');
    const player2buttons = document.querySelector('#player2options');

    const player1pass = document.querySelector('#pass1');
    const player1take = document.querySelector('#takeCards1');

    const player2pass = document.querySelector('#pass2');
    const player2take = document.querySelector('#takeCards2');

    /* Ending Screen */
    const endingScreen = document.querySelector('#end');
    const playAgain = document.querySelector('#PlayAgain');
    const endTitle = document.querySelector('#end-text h1');
    const endDescription = document.querySelector('#end-text p');

    /* notify of player when joker is drawn */
    const p1jokernotify = document.querySelector('#joker-drawn-player-1');
    const p2jokernotify = document.querySelector('#joker-drawn-player-2');

    /* counting rounds */
    let currentRound = 1;
    const totalRounds = 7;

    let player1Done = false;
    let player2Done = false;

    /* music */
    const gameMusicbutton = document.querySelectorAll('.music');
    const gameMusic = new Audio('audio/game-music-loop.mp3');
    gameMusic.loop = true;

    const startEndMusicbutton = new Audio('audio/start-button-sound.mp3');

    const drawJokerMusic = new Audio('audio/draw-joker.mp3');

    const takeOrpassButtonmusic = new Audio('audio/take-pass-button-sound.mp3');

    const flipcardsound = new Audio('audio/flipcard.mp3');

    const dealcardssound = new Audio('audio/playing-cards-being-dealt.mp3');
    dealcardssound.playbackRate = 2.2;


    gameMusicbutton.forEach(function(btn) {
    btn.addEventListener("click", () => {
        if (gameMusic.paused) {
            gameMusic.play();
        } else {
            gameMusic.pause();
        }
        });
    });

    /* data for game */
    const gameData = {
        deck: [
            {img: "Club-1.png", value: 1},
            {img: "Club-2.png", value: 2},
            {img: "Club-3.png", value: 3},
            {img: "Club-4.png", value: 4},
            {img: "Club-5.png", value: 5},
            {img: "Club-6.png", value: 6},
            {img: "Club-7.png", value: 7},
            {img: "Club-8.png", value: 8},
            {img: "Club-9.png", value: 9},
            {img: "Club-10.png", value: 10},
            {img: "Club-11.png", value: 11},
            {img: "Club-12.png", value: 12},
            {img: "Club-13.png", value: 13},

            {img: "Diamond-1.png", value: 1},
            {img: "Diamond-2.png", value: 2},
            {img: "Diamond-3.png", value: 3},
            {img: "Diamond-4.png", value: 4},
            {img: "Diamond-5.png", value: 5},
            {img: "Diamond-6.png", value: 6},
            {img: "Diamond-7.png", value: 7},
            {img: "Diamond-8.png", value: 8},
            {img: "Diamond-9.png", value: 9},
            {img: "Diamond-10.png", value: 10},
            {img: "Diamond-11.png", value: 11},
            {img: "Diamond-12.png", value: 12},
            {img: "Diamond-13.png", value: 13},

            {img: "Heart-1.png", value: 1},
            {img: "Heart-2.png", value: 2},
            {img: "Heart-3.png", value: 3},
            {img: "Heart-4.png", value: 4},
            {img: "Heart-5.png", value: 5},
            {img: "Heart-6.png", value: 6},
            {img: "Heart-7.png", value: 7},
            {img: "Heart-8.png", value: 8},
            {img: "Heart-9.png", value: 9},
            {img: "Heart-10.png", value: 10},
            {img: "Heart-11.png", value: 11},
            {img: "Heart-12.png", value: 12},
            {img: "Heart-13.png", value: 13},

            {img: "Spade-1.png", value: 1},
            {img: "Spade-2.png", value: 2},
            {img: "Spade-3.png", value: 3},
            {img: "Spade-4.png", value: 4},
            {img: "Spade-5.png", value: 5},
            {img: "Spade-6.png", value: 6},
            {img: "Spade-7.png", value: 7},
            {img: "Spade-8.png", value: 8},
            {img: "Spade-9.png", value: 9},
            {img: "Spade-10.png", value: 10},
            {img: "Spade-11.png", value: 11},
            {img: "Spade-12.png", value: 12},
            {img: "Spade-13.png", value: 13},

            {img: "Joker-1.png", value: 0},
            {img: "Joker-2.png", value: 0},
            {img: "Joker-3.png", value: 0},
            {img: "Joker-4.png", value: 0},
            {img: "Joker-5.png", value: 0},
        ],
        score: [0,0],
        targetNumber: 0,
        index: 0,

        player1cardstotal:0,
        player1card1: 0,
        player1card2: 0,

        player2cardstotal:0,
        player2card1: 0,
        player2card2: 0,
    };

    /* Fisher-Yates Shuffle - function found online */
    function shuffleDeck(array) {
        for (let i = array.length -1; i >0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        };
    };

    /* draw the cards after shuffling deck */
    function drawCards(n) {
        return gameData.deck.splice(0,n);
    };

    /* change image sources for drawn card, extract values of cards*/
    function dealToPlayers() {
        let player1cards = drawCards(2);
        let player2cards = drawCards(2);

        /* change images */
        player1card1.src = `images/${player1cards[0].img}`;
        player1card2.src = `images/${player1cards[1].img}`;

        player2card1.src = `images/${player2cards[0].img}`;
        player2card2.src = `images/${player2cards[1].img}`;

        /* get total number from cards and each card for each player - add to gameData*/
        gameData.player1cardstotal = player1cards[0].value + player1cards[1].value;
        gameData.player1card1 = player1cards[0].value;
        gameData.player1card2 = player1cards[1].value;

        gameData.player2cardstotal = player2cards[0].value + player2cards[1].value;
        gameData.player2card1 = player2cards[0].value;
        gameData.player2card2 = player2cards[1].value;

        console.log(`Player 1 Dealt Cards Total: ${gameData.player1cardstotal}, Card1: ${gameData.player1card1}, Card2: ${gameData.player1card2}`);
        console.log(`Player 2 Dealt Cards Total: ${gameData.player2cardstotal}, Card1: ${gameData.player2card1}, Card2: ${gameData.player2card2}`);
    }

     /* for each round: animate deal cards moving to spot */
    function animateStartingCards() {
        cardPlaced.forEach((card, index) => {
            const delay = 600 + (index * 200);   
            const moveX = (index + 1) * 200;    

            dealcardssound.play();
            setTimeout(function() {
                mainCard[index].style.transform = `translateX(${moveX}px)`;

                setTimeout(function() {
                    flipcardsound.play();
                    card.style.opacity = 1;
                    card.classList.add('flip-animation');

                    mainCard[index].style.opacity = 0;
                    mainCard[index].style.transform = 'translateX(0)';

                    setTimeout(function(){
                        mainCard[index].style.opacity = 1;
                        card.style.opacity = 0;

                        setTimeout(function(){
                            card.classList.remove('flip-animation');
                            /* showTargetNumber.classList.remove('visible');
                            showTargetNumber.classList.add('hidden'); */

                        }, 500);
                    }, 3000);
                }, delay);
            }, 100);
        });
    }

    /* for each round: animate deal cards moving to spot */
    function animateDealingCards() {
        const positions = [70,270,710,910];

        cardPlacedDeal.forEach((card, index) => {
            const delay = 600 + (index * 200);
            const move = positions[index];

            dealcardssound.play();
            setTimeout(function() {
                mainCard[index].style.transform = `translate(${move}px , 380px)`;

                setTimeout(function(){
                    card.style.opacity = 1;
                    mainCard[index].style.opacity = 0;

                    setTimeout(function() {
                        mainCard[index].style.transform = 'translateX(0)';
                        
                        setTimeout(function(){
                            mainCard[index].style.opacity = 1;
                        }, 3000);
                    }, delay);
                },600);
            }, 100);
        });
    }

    /* events for when players pass or take cards */
    function whenplayer1pass(callback){
        flipcardsound.play();
        setTimeout(function(){
            cardPlacedDeal[0].classList.add('flip-animation');
            cardPlacedDeal[1].classList.add('flip-animation');

            setTimeout(function(){
                cardPlacedDeal[0].classList.remove('flip-animation');
                cardPlacedDeal[1].classList.remove('flip-animation');

                callback();
            },2000);
        },100);
    }

    function whenplayer1take(callback){
        flipcardsound.play();
        setTimeout(function(){
            cardPlacedDeal[0].classList.add('flip-animation');
            cardPlacedDeal[1].classList.add('flip-animation');

            /* check for joker and set player score to 0 if so */
            if (gameData.player1card1 === 0 || gameData.player1card2 === 0) {
                gameData.score[0] = 0;

                setTimeout(function(){
                    drawJokerMusic.play();
                    p1jokernotify.style.visibility = 'visible';
                    setTimeout(function(){
                        p1jokernotify.style.visibility = 'hidden';
                    }, 2000);
                }, 100);

            } else {
                /* if no joker, update score normally */
                if (currentRound == 1 || currentRound == 3 || currentRound == 5 || currentRound == 7) {
                    gameData.score[0] += gameData.player1cardstotal;
                } else {
                    gameData.score[0] -= gameData.player1cardstotal;
                }
            }

            player1score.innerHTML = gameData.score[0];

            setTimeout(function(){
                cardPlacedDeal[0].classList.remove('flip-animation');
                cardPlacedDeal[1].classList.remove('flip-animation');

                callback();
            },2000);
        },100);
    }

    function whenplayer2pass(callback){
        flipcardsound.play();
        setTimeout(function(){
            cardPlacedDeal[2].classList.add('flip-animation');
            cardPlacedDeal[3].classList.add('flip-animation');

            setTimeout(function(){
                cardPlacedDeal[2].classList.remove('flip-animation');
                cardPlacedDeal[3].classList.remove('flip-animation');

                callback();
            },2000);
        },100);
    }

    function whenplayer2take(callback){
        flipcardsound.play();
        setTimeout(function(){
            cardPlacedDeal[2].classList.add('flip-animation');
            cardPlacedDeal[3].classList.add('flip-animation');

            if (gameData.player2card1 === 0 || gameData.player2card2 === 0) {
                gameData.score[1] = 0;

                setTimeout(function(){
                    drawJokerMusic.play();
                    p2jokernotify.style.visibility = 'visible';
                    setTimeout(function(){
                        p2jokernotify.style.visibility = 'hidden';
                    }, 2000);
                }, 100);

            } else {
                /* if no joker, update score normally */
                if (currentRound == 1 || currentRound == 3 || currentRound == 5 || currentRound == 7) {
                    gameData.score[1] += gameData.player2cardstotal;
                } else {
                    gameData.score[1] -= gameData.player2cardstotal;
                }
            }

            player2score.innerHTML = gameData.score[1];

            setTimeout(function(){
                cardPlacedDeal[2].classList.remove('flip-animation');
                cardPlacedDeal[3].classList.remove('flip-animation');

                callback();
            },2000);
        },100);
    }

    /* record player action if they pass or take cards to check if round is complete */
    function handlePlayerAction(player) {
        if (player === 1) {
            player1Done = true;
            player1buttons.style.visibility = 'hidden';
        } else if (player === 2) {
            player2Done = true;
            player2buttons.style.visibility = 'hidden';
        }

        checkRoundComplete();
    }

    /* checking if round is complete once both players took their turns */
    function checkRoundComplete() {
        if (player1Done && player2Done) {
            console.log("Round " + currentRound + " finished");
            startNextRound();
        }
    }

    /* starting next round of game */
    function startNextRound() {
        currentRound++;

        if (currentRound < totalRounds) 
        round.forEach(function(r){
            r.innerHTML = `Round ${currentRound}`;
        })

        if (currentRound == 1 || currentRound == 3 || currentRound == 5) {
            round[1].innerHTML += ': Add';
            roundPosition.innerHTML = 'Add';
        } else if (currentRound ==7) {
            round[0].innerHTML = 'Final Round';
            roundPosition.innerHTML = 'Add';
            round[1].innerHTML = 'Final Round: Add';
        } else {
            round[1].innerHTML += ': Subtract';
            roundPosition.innerHTML = 'Subtract';
        }

        player1Done = false;
        player2Done = false;

        if(currentRound == 2){
            cardPlacedDealStay.style.visibility = 'visible';
        }

        if (currentRound > totalRounds) {
            endGame();
        } else {
            console.log("Starting round " + currentRound);

            setTimeout(function(){
                dealToPlayers();
                notifyRound();
                
                setTimeout(function(){
                    animateDealingCards();
                    player1buttons.style.visibility = 'visible';
                    player2buttons.style.visibility = 'visible';
                }, 2500);
            }, 1000);
        }
    }

    /* when game finishes, i.e. when 7 rounds are done */
    function endGame(){
        gameSection.style.visibility = 'hidden';
        bodybackground.classList.remove('bg-active');
        scoreSection.style.visibility = 'hidden';
        cardPlacedDealStay.style.visibility = 'hidden';

        if (gameData.score[0] < gameData.targetNumber && gameData.score[1] < gameData.targetNumber) {
            const diffPlayer1 = Math.abs(gameData.targetNumber - gameData.score[0]);
            const diffPlayer2 = Math.abs(gameData.targetNumber - gameData.score[1]);

            if (diffPlayer1 < diffPlayer2) {
                const margin1 = Math.abs(diffPlayer1 - diffPlayer2);
                console.log('Player 1 wins');
                endTitle.innerHTML = 'Player 1 Wins!';
                endDescription.innerHTML = `Player 1 got closer to the Target Number by ${margin1} points.`;
            } else {
                const margin2 = Math.abs(diffPlayer2 - diffPlayer1);
                console.log('Player 2 wins');
                endTitle.innerHTML = 'Player 2 Wins!';
                endDescription.innerHTML = `Player 2 got closer to the Target Number by ${margin2} points.`;
            }

        } else if (gameData.score[0] == gameData.targetNumber && gameData.score[1] < gameData.targetNumber) {
            endTitle.innerHTML = 'Player 1 Wins!';
            endDescription.innerHTML = 'Player 1 got exactly the Target Number.';

        }else if (gameData.score[0] < gameData.targetNumber && gameData.score[1] == gameData.targetNumber) {
            endTitle.innerHTML = 'Player 1 Wins!';
            endDescription.innerHTML = 'Player 2 got exactly the Target Number.';

        } else if (gameData.score[0] < gameData.targetNumber && gameData.score[1] > gameData.targetNumber) {
            console.log('Player 1 wins');
            endTitle.innerHTML = 'Player 1 Wins!';
            endDescription.innerHTML = 'Player 1 got closest to the Target Number without going over.';

        } else if (gameData.score[0] > gameData.targetNumber && gameData.score[1] < gameData.targetNumber) {
            endTitle.innerHTML = 'Player 2 Wins!';
            endDescription.innerHTML = 'Player 2 got closest to the Target Number without going over.';

        } else if (gameData.score[0] > gameData.targetNumber && gameData.score[1] > gameData.targetNumber) {
            console.log('nobody wins');
            endTitle.innerHTML = 'Nobody Wins!';
            endDescription.innerHTML = 'Both players went over the Target Number.';

        } else {
            console.log('Tie!');
            endTitle.innerHTML = 'Tie!';
        }
        
        endingScreen.style.visibility = 'visible';
        playAgain.addEventListener('click', function(){
            location.reload();
        });

        console.log('Game Finished');


    }

    /* notify players of the round they are on */
    function notifyRound() {

        roundNotificationSection.style.visibility = 'visible';
        blackbg.style.visibility = 'visible';

        setTimeout(function(){
            roundNotificationSection.style.visibility = 'hidden';
            blackbg.style.visibility = 'hidden';
        }, 1500);
    }

    /* show Target Number */
    function initialShowTargetNumber() {
        showTargetNumber.style.visibility = 'visible';

        setTimeout(function(){
            showTargetNumber.style.visibility = 'hidden';
        }, 1000);
        /* setTimeout(function(){
            showTargetNumber.style.visibility = 'visible';

            setTimeout(function(){
                showTargetNumber.style.visibility = 'hidden';

            },10)
        }, 1000);  */ 
    }

    /* Start Game */
    startGameButton.addEventListener('click', function(event){
        startEndMusicbutton.play();
        startSection.style.visibility = 'hidden';
        gameSection.style.visibility = 'visible';

        bodybackground.className = 'bg-active';

        /* shuffle deck once*/
        shuffleDeck(gameData.deck);
        /* get target number and change source images to match */
        gameData.targetNumber = gameData.deck[0].value + gameData.deck[1].value + gameData.deck[2].value + gameData.deck[3].value;

        console.log(`Target Number: ${gameData.targetNumber}`);

        targetcard1.src = `images/${gameData.deck[0].img}`;
        targetcard2.src = `images/${gameData.deck[1].img}`;
        targetcard3.src = `images/${gameData.deck[2].img}`;
        targetcard4.src = `images/${gameData.deck[3].img}`;

        targetNumberappend.forEach(function(target){
            target.innerHTML = gameData.targetNumber;
        })

        setTimeout(function(){
            notifyRound();

            setTimeout(function(){
                animateStartingCards();

                setTimeout(function(){
                    initialShowTargetNumber();

                    /* shuffle deck again to deal cards*/
                    shuffleDeck(gameData.deck);
                    dealToPlayers();

                    setTimeout(function(){
                        animateDealingCards();

                        setTimeout(function(){
                            scoreSection.style.visibility = 'visible';

                            setTimeout(function(){
                                playerbuttons.style.visibility = 'visible';

                            },100);
                        },1000);
                    }, 2000);
                }, 4500);
            }, 3000);
        },300);
    });

    /* Quit Game */
    quitGame.addEventListener('click', function(){
        startEndMusicbutton.play();
        location.reload();
    });

    /* Player Action */
    player1pass.addEventListener('click', function(){
        takeOrpassButtonmusic.play();
        whenplayer1pass(function(){
            handlePlayerAction(1);
        });
    });

    player1take.addEventListener('click', function(){
        takeOrpassButtonmusic.play();
        whenplayer1take(function(){
            handlePlayerAction(1);
        });
    });

    player2pass.addEventListener('click', function(){
        takeOrpassButtonmusic.play();
        whenplayer2pass(function(){
            handlePlayerAction(2);
        });
    });

    player2take.addEventListener('click', function(){
        takeOrpassButtonmusic.play();
        whenplayer2take(function(){
            handlePlayerAction(2);
        });
    });

})();


/* function animateCards() {
            setTimeout(function(){
                    mainCard[0].style.transform = 'translateX(200px)';

                setTimeout(function(){
                    cardPlaced[0].style.opacity = 1;
                    cardPlaced[0].classList.add('flip-animation');
                    mainCard[0].style.opacity = 0;
                    mainCard[0].style.transform = 'translateX(0)';

                },400);
            }, 100);

            setTimeout(function(){
                    mainCard[1].style.transform = 'translateX(400px)';

                    setTimeout(function(){
                        cardPlaced[1].style.opacity = 1;
                        cardPlaced[1].classList.add('flip-animation');
                        mainCard[1].style.opacity = 0;
                        mainCard[1].style.transform = 'translateX(0)';

                    },600);
                }, 100);

            setTimeout(function(){
                    mainCard[2].style.transform = 'translateX(600px)';

                    setTimeout(function(){
                        cardPlaced[2].style.opacity = 1;
                        cardPlaced[2].classList.add('flip-animation');
                        mainCard[2].style.opacity = 0;
                        mainCard[2].style.transform = 'translateX(0)';

                    },800);
                }, 100);

                setTimeout(function(){
                    mainCard[3].style.transform = 'translateX(800px)';

                    setTimeout(function(){
                        cardPlaced[3].style.opacity = 1;
                        cardPlaced[3].classList.add('flip-animation');
                        mainCard[3].style.opacity = 0;
                        mainCard[3].style.transform = 'translateX(0)';

                    },1000);
                }, 100);
    }; */