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