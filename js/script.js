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
            buttons.forEach(button => button.classList.add('fade-out'));
            setTimeout(() => {
                buttons.forEach(button => {
                    button.classList.add('hidden');
                    button.querySelector('h2').innerHTML = button === donateButton ? 'Back &larr;' : getPaymentMethod(button);
                });
                buttons.forEach(button => button.classList.remove('hidden'));
                buttons.forEach(button => button.classList.add('fade-in'));
                setTimeout(() => {
                    buttons.forEach(button => button.classList.remove('fade-in'));
                }, 500);
                isDonateMenuVisible = true;
            }, 500);
        } else {
            buttons.forEach(button => button.classList.add('fade-out'));
            setTimeout(() => {
                buttons.forEach(button => {
                    button.classList.add('hidden');
                    button.querySelector('h2').innerHTML = getOriginalText(button);
                });
                buttons.forEach(button => button.classList.remove('hidden'));
                buttons.forEach(button => button.classList.add('fade-in'));
                setTimeout(() => {
                    buttons.forEach(button => button.classList.remove('fade-in'));
                }, 500);
                isDonateMenuVisible = false;
            }, 500);
        }
    });

    function getPaymentMethod(button) {
        switch (button) {
            case buttons[0]: return 'PayPal';
            case buttons[1]: return 'Credit Card';
            case buttons[2]: return 'Bitcoin';
            default: return 'Unknown';
        }
    }

    function getOriginalText(button) {
        switch (button) {
            case buttons[0]: return 'Telegram <span>&rarr;</span>';
            case buttons[1]: return 'Steam <span>&rarr;</span>';
            case buttons[2]: return 'Discord <span>&rarr;</span>';
            case buttons[3]: return 'VK [inactive]';
            case buttons[4]: return 'YouTube [inactive]';
            case buttons[5]: return 'Donate <span>&rarr;</span>';
            default: return 'Unknown';
        }
    }
});
