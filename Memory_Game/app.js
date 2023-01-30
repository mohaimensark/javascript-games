const cardArray = [
  {
    name: "car",
    img: "images/car.jpeg",
  },
  {
    name: "dog",
    img: "images/dog.jpeg",
  },
  {
    name: "duck",
    img: "images/duck.jpeg",
  },
  {
    name: "humming",
    img: "images/humming.jpeg",
  },
  {
    name: "panda",
    img: "images/panda.jpeg",
  },
  {
    name: "parrot",
    img: "images/parrot.jpeg",
  },
  {
    name: "car",
    img: "images/car.jpeg",
  },
  {
    name: "dog",
    img: "images/dog.jpeg",
  },
  {
    name: "duck",
    img: "images/duck.jpeg",
  },
  {
    name: "humming",
    img: "images/humming.jpeg",
  },
  {
    name: "panda",
    img: "images/panda.jpeg",
  },
  {
    name: "parrot",
    img: "images/parrot.jpeg",
  }
  
];

cardArray.sort(() => 0.5 - Math.random());

//console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const stat = document.querySelector("#stat");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");

    card.setAttribute("src", "images/space.jpeg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    //console.log(card,i);

    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");

  const option1 = cardsChosenIds[0];
  const option2 = cardsChosenIds[1];

  if (option1 == option2) {
    stat.innerHTML = "Match found!"
   // alert("clicked the same image!");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
  //  alert("You found a match!");
  stat.innerHTML = "Match found!"

    cards[cardsChosenIds[0]].setAttribute("src", "images/black.jpeg");

    cards[cardsChosenIds[1]].setAttribute("src", "images/black.jpeg");

    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);

    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    console.log(option1);
    console.log(option2);
    cards[option1].setAttribute("src", "images/space.jpeg");

    cards[option2].setAttribute("src", "images/space.jpeg");

     stat.innerHTML = "Try again!"
     
  }
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratualations you found them all";
  } else {
    resultDisplay.textContent = cardsWon.length;
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  console.log(cardArray[cardId]);
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
