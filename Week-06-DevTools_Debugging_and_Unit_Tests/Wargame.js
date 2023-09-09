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

    //I've decided, to start with, that I'm going to keep all the classes in one file, for simplicity.  
    //If it gets too difficult to read,  I may break them up later. 
    
/*
OBJECTS:
CARDS 52
    rank: number
    suit: string
    value: number*/
    class Card {
        constructor(suit, rank) {
            this.suit =suit
            this.rank = rank 
            this.value = value
        }
        //to combine the thre constructor parameters I defined and used the method "createCard" 
        //to return a complete card, I'll iterate through this with a loop and arrays later to create
        // the 52 cards
        createCard() {
            return `${this.rank} of ${this.suit} and ${this.value}`;
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
              this.cardStack = [];
              const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
              const ranks = ['Ace','2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
              const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
              for (let suit of suits) {
                for (let rank of ranks) {
                    for(let value of values) {
                  this.cards.push(new Card(suit, rank, value));
                    }
                }
              }
            }

    /*Actions that the Deck needs to do:
        -shuffle()
        -deal the cards (or will the players draw the cards...not sure about this*/
        shuffle() {
            //find a shuffle method for here---
            // Fisher-Yates Shuffle Algorithm to shuffle the cards
  for (let i = this.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i

    // Swap the cards at indices i and j
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
}
        }

        Deal() 
        //dealing method: 
        {const myDeck = new Deck();

            const player1Card = myDeck.deal();
            const player2Card = myDeck.deal();
            
            if (player1Card === null || player2Card === null) {
              console.log("The deck is empty. Game over!");
            } else {
              console.log(`Player 1: ${player1Card.toString()}`);
              console.log(`Player 2: ${player2Card.toString()}`);
            }
            
         /*

       */
     /*ACTIONS:
        √populate()
        √Defines suits, ranks and values
             [Heart, Ace, 1], [Spade, King, 13]
        √Populates 52 cards

        √shuffleDeck()
        randomizes order of cards array
        https://flaviocopes.com/how-to-shuffle-array-javascript/
        https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    
        //PLAYER
    /*name: string
    cards: []
    score: 0*/
    // Define Player objects
const player1 = {
    name: "Player 1",
    hand: [], // An array to store the player 1's cards
  };
  
  const player2 = {
    name: "Player 2",
    hand: [], // An array to store the player 2's cards
  };
  
  // Example: Dealing cards to the players
  const card1 = myDeck.deal(); // Assume myDeck is your deck object with a deal() method
  const card2 = myDeck.deal();
  
  if (card1 !== null && card2 !== null) {//null means if there are no more cards to deal
    player1.hand.push(card1); // Add the dealt card to Player 1's hand
    player2.hand.push(card2); // Add the dealt card to Player 2's hand
  }
  
  // Display the players' hands
  console.log(`${player1.name}'s hand: ${player1.hand.map(card => card.toString()).join(', ')}`);
  console.log(`${player2.name}'s hand: ${player2.hand.map(card => card.toString()).join(', ')}`);
  
 
  


    //GAMEPLAY/DEALER
    /*List: [] Players (2)
    List: [] Deck
    
    start()
    While loop for user to start game
    createGame()
    // Function to start the game
function start() {
  // While loop for the user to start the game
  let playGame = true;


    createGame()
    Instantiate 2 Players
    Instantiate and build Deck
    
    Give 26 cards to each Player
    "If the deck of 52 cards is split between the two players, then each will only have 26 cards/turns. 
    So instead of a "While" loop, I used a "For" loop (i=0; i<26; i++)""--Milton Aineruhanga--from Slack!
    
    Loop through all 26 cards and determine which value is higher. Then assign 1 point to winning card of Player 1 or Player 2
    Display winner - higher score
    note: could separate into multiple methods
    */
    function start() {
        // While loop for the user to start the game
        let playGame = true;
      
        while (playGame) {
          createGame();
          // Ask the user if they want to play again and set playGame accordingly
          playGame = confirm("Do you want to play again?");
        }
      
        // Game over message
        console.log("Thanks for playing!");
      }
      
      // Function to create and play the game
      function createGame() {
        // Instantiate 2 Players
        const player1 = {
          name: "Player 1",
          score: 0,
          hand: [],
        };
      
        const player2 = {
          name: "Player 2",
          score: 0,
          hand: [],
        };
      
        // Instantiate and build Deck
        const myDeck = new Deck();
      
        // Give 26 cards to each Player
        for (let i = 0; i < 26; i++) {
          const card1 = myDeck.deal();
          const card2 = myDeck.deal();
      
          if (card1 !== null && card2 !== null) {
            player1.hand.push(card1);
            player2.hand.push(card2);
          }
        }
      
        // Loop through all 26 cards and determine which value is higher. Then assign 1 point to the winning card of Player 1 or Player 2
        for (let i = 0; i < 26; i++) {
          const card1 = player1.hand[i];
          const card2 = player2.hand[i];
      
          if (compareCards(card1, card2) === 1) {
            player1.score++;
          } else if (compareCards(card1, card2) === -1) {
            player2.score++;
          }
        }
      
        // Display the winner - higher score
        if (player1.score > player2.score) {
          console.log(`${player1.name} wins with a score of ${player1.score}!`);
        } else if (player2.score > player1.score) {
          console.log(`${player2.name} wins with a score of ${player2.score}!`);
        } else {
          console.log("It's a tie!");
        }
      }
    }