window.onload = function () {
    setTimeout(function () {
        const loader = document.querySelector('.loader-container');
        loader.style.opacity = '0';
        setTimeout(function () {
            loader.style.display = 'none'; // Hide the loader completely after fade out
            document.querySelector('main').style.opacity = '1';
            document.body.style.overflowY = 'scroll';
        }, 1000); // Match the duration of the fade-out transition
    }, 1000); // Initial delay before starting the fade-out
};

document.addEventListener('DOMContentLoaded', function () {
    const donateButton = document.querySelector('.donate-button');
    const backButton = document.querySelector('.back-button');
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
