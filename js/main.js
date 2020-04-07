const memoryGame = new MemoryGame(cards);
let cardWasFlipped = false;
let firstCard, secondCard;
let wrongGuesses = 0;

//load cards in browser. Link this to the shuffle function
window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((card) => {
    html += `<div class="card" data-card-name="${card.name}">`;
    html += `<div class="back" name="${card.name}"></div>`;
    html += `<div class="front" style="background: url(./imgs/${card.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  function shuffleCards(cards) {
    if (!cards) {
      return undefined;
    } else {
      //let newCardsArr = this.cardsArr.splice(0, cardsArr.length); //do I need to make sure not to mutate the original array?
      for (let i = 0; i < cards.length - 1; i++) {
        let random = Math.floor(Math.random() * arr.length);

        let j = Math.floor(Math.random() * cards.length + 1);
        let temp = cards[j];
        cards[j] = cards[i];
        cards[i] = temp; //swaps position of card at index i (0 thru till last cast) and card at random index j
      }
      console.log(random);
    }
  }

  // Add all the divs to the HTML.
  document.querySelector("#memory-board").innerHTML = html;

  // Link the click event for each element(i.e. card) to a function to flip clards'
  document
    .querySelectorAll(".card")
    .forEach((card) => card.addEventListener("click", flipCard));

  function flipCard() {
    console.log("flipped");
    //console.log(this);
    this.classList.add("flip");
    setTimeout(() => {
      this.classList.remove("flip");
    }, 2000)
    // if (!cardWasFlipped) {
    //   //it's the first time player clicked a card
    //   cardWasFlipped = true;
    //   firstCard = this; //ie the card they clicked is assigned to firstCard variable
    //   console.log(cardWasFlipped, firstCard);
    //   return;
    // } else {
    //   //second time player clicks on card
    //   cardWasFlipped = false;
    //   secondCard = this;
    //   console.log(cardWasFlipped, secondCard);
    // }
    // checkIfPair();
  }

  function checkIfPair(firstCard, secondCard) {
    //add one to pairsClicked property
    //if cards are the same, add 1 to pairsGuessed
    //return true or false based on result of comparing both cards
    console.log("test checkifpair");

    //let cardName = div.dataset.cardname;
    console.log(firstCard);
    // console.log(this);
    if (firstCard.card.name === secondCard.card.name) {
      wrongGuesses += 1;
      console.log(wrongGuesses);
      disableCards();
    } else {
      console.log("Test checkifpair");
      unflipCards();
    }
  }

  function disableCards() {
    //called in checkIfPair if the two cards match
    //or maybe get them to disappear?
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  function unflipCards() {
    // called if two cards are not matching cards
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
    }, 1500);
  }

  /*
    this.pickedCards.unshift(firstCard);
    this.pickedCards.push(secondCard);
    console.log(this.pickedCards);
    this.pairsClicked += 1;
    if (this.pickedCards[0].name === this.pickedCards[1].name) {
      //(card1.name === card2.name) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  */
  //}

  //console.log("check in console");
  //toggles the class between class card flip and just class card
  //   let blockPairs = checkIfPaired(card1, card2);
  //   if (blockPairs === true) {
  //     card.classList.add("blocked");
  //   }

  //   console.log(`Card clicked: ${card}`);
  //     }

  //   });
});

//call is finished to check if game is over
