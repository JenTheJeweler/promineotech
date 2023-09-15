/*
    For the final project you will be creating an automated version of the classic card game WAR! 
    There are many versions of the game WAR. In this version there are only 2 players.
        You do not need to do anything special when there is a tie in a round.
    Think about how you would build this project and write your plan down. 
    Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
        You do not need to accept any user input, when you run your code, 
        the entire game should play out instantly without any user input inside of your browser's console.

    Deal 26 Cards to each Player from a Deck of 52 cards.
    Iterate through the turns where each Player plays a Card.
    The Player who played the higher card is awarded a point.
        Ties result in zero points for both Players.
    After all cards have been played, display the score and declare the winner.
    Write a Unit Test using Mocha and Chai for at least one of the functions you write.*/
/*
OBJECTS:
CARDS 52
    rank: number
    suit: string
    value: number*/
    class Card {
        constructor(suit, rank, value) {
            this.suit =suit
            this.rank = rank 
            this.value = value
        }
        //to combine the thre constructor parameters I defined and used the method "createCard" 
        //to return a complete card, I'll iterate through this with a loop and arrays later to create
        // the 52 cards
        createCard() {
            return `${this.rank} of ${this.suit}`;
          }
        }
        
    
    //DECK
    /*  define/initialize Deck class
            constructor (empty to be input)
            [array of ranks]
               [array of suits]

                method to buildDeck-("populate deck") a loop that iterates through each combo of rank and suit
                and then 'pushes' each new card into the deck--fills the deck()*/
        
        
        class Deck {
            constructor() {
              this.cards = [];
              const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
              const ranks = ['Ace','2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
              
              for (let suit of suits) {
                for (let rank of ranks) {
                let value = ranks.indexOf(rank) + 1
                this.cards.push(new Card(suit, rank, value));
                    }
                }
            };
            
            /*Actions that the Deck needs to do:
            -shuffle()
            -***deal the cards (or will the players draw the cards...not sure about this*/
            
            shuffle() {
                // Fisher-Yates Shuffle Algorithm to shuffle the cards:
                for (let i = this.cards.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
                    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];// This line swaps the cards at 
                    //indexes i and j, randomly
                }
            };
            deal() {
                if (this.cards.length === 0) {
                    return null; // Return null to indicate that the deck is empty
                }
             return this.cards.pop(); //.pop removes and returns the last element from an array
                }
            };
        
        // Function to start the game
        // Create Player 1 and Player 2 objects with initial scores and empty hands
        const player1 = {
            name: "Player 1",
            score: 0,
            hand: [],
        }
        
        const player2 = {
            name: "Player 2",
            score: 0,
            hand: [],
        }
        
        const myDeck = new Deck(); // Create a new deck of cards
        myDeck.shuffle();
        // Deal 26 cards to each player
        for (let i = 0; i < 26; i++) {
            let card1 = myDeck.cards.pop(); 
            let card2 = myDeck.cards.pop(); //
            
            player1.hand.push(card1); // Add the dealt card to Player 1's hand
            player2.hand.push(card2); // Add the dealt card to Player 2's hand
        }
        console.log(player1.hand);

       
        
        // Function to create and play the game
        function playGame() {
            // Loop for each turn (each card dealt
            myDeck.shuffle();
          for (let i = 0; i < 26; i++) {
            let card1 = player1.hand.pop();
            let card2 = player2.hand.pop();
          
                
            console.log(`${player1.name} got ${card1.createCard()}`);
            console.log(`${player2.name} got ${card2.createCard()}`);

            if (card1.value > card2.value){
                player1.score+=1
                console.log("Player 1 gets a point!");
            } else if (card2.value >card1.value){
                player2.score+=1
                console.log("Player 2 gets a point!");
            } else (card1.value==card2.value)
                console.log("Tie, no points!");
            }
            };

            // Compare the values of the cards and determine the winner
             for (let i = 0; i < 26; i++) {
                let card1 = player1.hand[i];
                let card2 = player2.hand[i];
            if (card1.value > card2.value) {
                 player1.score++;
                } else if (card1.value < card2.value) {
                     player2.score++;
                         }
                         };
        // Display the winner or declare a tie based on the final scores
            if (player1.score > player2.score) {
              console.log(`${player1.name} wins with a score of ${player1.score}!`);
            } else if (player2.score > player1.score) {
              console.log(`${player2.name} wins with a score of ${player2.score}!`);
            } else {
            };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

  playGame();