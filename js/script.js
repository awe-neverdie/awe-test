window.onload = function () {
    setTimeout(function () {
        document.querySelector('.loader-container').style.opacity = '0';
        document.querySelector('main').style.opacity = '1';
        document.body.style.overflowY = 'scroll';
    }, 1000);
};

document.addEventListener('DOMContentLoaded', function() {
    const donateButton = document.getElementById('donate-button');
    const backButton = document.getElementById('back-button');
    const buttons = document.querySelectorAll('.link-button');
    const donateMenu = document.getElementById('donate-menu');

    donateButton.addEventListener('click', function() {
        buttons.forEach(button => {
            button.classList.add('fade-out');
        });
        setTimeout(() => {
            buttons.forEach(button => button.classList.add('hidden'));
            donateMenu.classList.add('active');
        }, 500);
    });

    backButton.addEventListener('click', function() {
        donateMenu.classList.remove('active');
        donateMenu.classList.add('fade-out-menu');
        
        setTimeout(() => {
            donateMenu.classList.remove('fade-out-menu');
            buttons.forEach(button => {
                button.classList.remove('hidden', 'fade-out');
                button.classList.add('fade-in');
            });
        }, 500);
    });
});
