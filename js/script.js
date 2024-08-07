window.onload = function () {
    setTimeout(function () {
        document.querySelector('.loader-container').style.opacity = '0';
        document.querySelector('main').style.opacity = '1';
        document.body.style.overflowY = 'scroll';
    }, 1000);
};

document.addEventListener('DOMContentLoaded', function() {
    const donateButton = document.getElementById('donate-button');
    const buttons = document.querySelectorAll('.link-button');
    let isDonateMenuVisible = false;

    donateButton.addEventListener('click', function() {
        if (!isDonateMenuVisible) {
            buttons.forEach(button => {
                button.classList.add('fade-out');
                setTimeout(() => {
                    if (button !== donateButton) {
                        button.querySelector('h2').textContent = getPaymentMethod(button);
                    } else {
                        button.querySelector('h2').innerHTML = 'Back &larr;';
                    }
                }, 500);
            });

            setTimeout(() => {
                buttons.forEach(button => {
                    button.classList.remove('fade-out');
                    button.classList.add('fade-in');
                });

                setTimeout(() => {
                    buttons.forEach(button => button.classList.remove('fade-in'));
                }, 500);
            }, 500);

            isDonateMenuVisible = true;
        } else {
            buttons.forEach(button => {
                button.classList.add('fade-out');
                setTimeout(() => {
                    button.querySelector('h2').innerHTML = getOriginalText(button);
                }, 500);
            });

            setTimeout(() => {
                buttons.forEach(button => {
                    button.classList.remove('fade-out');
                    button.classList.add('fade-in');
                });

                setTimeout(() => {
                    buttons.forEach(button => button.classList.remove('fade-in'));
                }, 500);
            }, 500);

            isDonateMenuVisible = false;
        }
    });

    function getPaymentMethod(button) {
        switch (button)
