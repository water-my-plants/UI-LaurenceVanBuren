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