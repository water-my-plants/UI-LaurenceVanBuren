// Nav
const wmp = document.querySelector('nav h3');
wmp.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // All Other Browsers
})

// Header
const signUpBtn = document.querySelector('.sign-up');
signUpBtn.addEventListener('click', () => {
    // console.log("Take my money!!");
    location.href = "https://water-my-plants-client.herokuapp.com/register";
});

const learnMoreBtn = document.querySelector('.learn-more');
learnMoreBtn.addEventListener('click', () => {
    location.href = "#intro";
});

class Card {
    constructor(card){
        // Props
        this.card = card;
        this.arrowBtn = card.querySelector('.card-title i');
        this.cardText = card.querySelector('p');
        this.cardImg = card.querySelector('img');

        this.arrowBtn.addEventListener('click', () => this.toggleContent());
    }
    // Methods
    toggleContent() {
        console.log(`Clicked on ${this}!`);
        this.arrowBtn.classList.toggle('rotate');

        if (this.cardText.classList.contains('block')){
            TweenMax.to(this.card, .3, {height: '63px'});
            setTimeout(() => {
                this.cardText.classList.toggle('block');
                this.cardImg.classList.toggle('block');     
            }, 300);
        } else {
            TweenMax.to(this.card, .3, {height: '625px'});
            this.cardText.classList.toggle('block');
            this.cardImg.classList.toggle('block');
        }
    }
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => new Card(card));