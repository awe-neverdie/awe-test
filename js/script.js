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
        if (!donateMenu.classList.contains('active')) {
            buttons.forEach(button => {
                button.classList.add('fade-out');
                button.classList.remove('fade-in');
            });
            setTimeout(() => {
                buttons.forEach(button => button.classList.add('hidden'));
                donateMenu.classList.add('active', 'fade-in-menu');
            }, 500);
        }
    });

    backButton.addEventListener('click', function() {
        if (donateMenu.classList.contains('active')) {
            donateMenu.classList.remove('fade-in-menu');
            donateMenu.classList.add('fade-out-menu');
            setTimeout(() => {
                donateMenu.classList.remove('active', 'fade-out-menu');
                buttons.forEach(button => {
                    button.classList.remove('hidden');
                    button.classList.add('fade-in');
                });
            }, 500);
        }
    });
});
