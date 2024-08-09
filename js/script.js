document.addEventListener('DOMContentLoaded', function () {
    const donateButton = document.querySelector('.donate-button');
    const backButton = document.querySelector('.back-button a');
    const buttonList = document.querySelector('.button-list');
    const donateDetails = document.querySelector('.donate-details');

    donateButton.addEventListener('click', function (event) {
        event.preventDefault();
        buttonList.style.opacity = '0';
        setTimeout(function () {
            buttonList.classList.add('hidden');
            donateDetails.classList.remove('hidden');
            donateDetails.classList.add('visible');
        }, 500);
    });

    backButton.addEventListener('click', function (event) {
        event.preventDefault();
        donateDetails.style.opacity = '0';
        setTimeout(function () {
            donateDetails.classList.remove('visible');
            donateDetails.classList.add('hidden');
            buttonList.classList.remove('hidden');
            buttonList.style.opacity = '1';
        }, 500);
    });
});
