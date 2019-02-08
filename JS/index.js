class Card {
    constructor(card){
        // Props
        this.card = card;
        this.cardText = card.querySelector('p');
        this.cardImg = card.querySelector('img');
    }
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => new Card(card));

// Nav
const wmp = document.querySelector('nav img');
wmp.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // All Other Browsers
})

// Header
const logInBtn = document.querySelector('.log-in');
logInBtn.addEventListener('click', () => {
    location.href = "https://water-my-plants-client.herokuapp.com/login";
});

const signUpBtn = document.querySelector('.sign-up');
signUpBtn.addEventListener('click', () => {
    location.href = "https://water-my-plants-client.herokuapp.com/register";
});

const learnMoreBtn = document.querySelector('.learn-more');
learnMoreBtn.addEventListener('click', () => location.href = "#intro");

// Footer
const apple = document.querySelector('.apple-img');
apple.addEventListener('click', () => {
    location.href = "https://www.apple.com/ios/app-store/"
});

const google = document.querySelector('.google-img');
google.addEventListener('click', () => {
    location.href = "https://play.google.com/store?hl=en"
});