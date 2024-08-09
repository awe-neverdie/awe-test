window.onload = function () {
    setTimeout(function () {
        document.querySelector('.loader-container').style.opacity = '0';
        document.querySelector('main').style.opacity = '1';
        document.body.style.overflowY = 'scroll';
    }, 1000);
};

document.addEventListener('DOMContentLoaded', function() {
    const donateButton = document.getElementById('donate-button');
    const buttons = Array.from(document.querySelectorAll('.link-button'));
    const walletAddresses = {
        'TON': 'xxx',
        'Steaqqm': 'steamwew@example.com',
        'Discqqweord': 'disceword@example.com'
    };
    let isDonateMenuVisible = false;

    donateButton.addEventListener('click', function() {
        if (!isDonateMenuVisible) {
            // Смена на donate меню
            buttons.forEach(button => {
                if (button !== donateButton) {
                    button.classList.add('fade-out');
                }
            });

            setTimeout(() => {
                buttons.forEach(button => {
                    if (button !== donateButton) {
                        button.querySelector('h2').textContent = getPaymentMethod(button);
                        button.querySelector('.wallet-address').textContent = walletAddresses[getPaymentMethod(button)] || '';
                    } else {
                        button.querySelector('h2').innerHTML = 'Back <span class="astro-5NTVGBE6">&larr;</span>';
                    }
                });

                setTimeout(() => {
                    buttons.forEach(button => {
                        button.classList.remove('fade-out');
                        button.classList.add('fade-in');
                        if (button !== donateButton) {
                            button.querySelector('.wallet-address').classList.add('visible');
                        }
                    });
                }, 50); 
            }, 300); 

            isDonateMenuVisible = true;
        } else {
            // Возвращение к оригинальным кнопкам
            buttons.forEach(button => {
                button.classList.add('fade-out');
                button.querySelector('.wallet-address').classList.remove('visible');
            });

            setTimeout(() => {
                buttons.forEach(button => {
                    button.querySelector('h2').innerHTML = getOriginalText(button);
                });

                setTimeout(() => {
                    buttons.forEach(button => {
                        button.classList.remove('fade-out');
                        button.classList.add('fade-in');
                    });
                }, 50); 
            }, 300); 

            isDonateMenuVisible = false;
        }
    });

    function getPaymentMethod(button) {
        switch (button) {
            case buttons[0]: return 'Telegram';
            case buttons[1]: return 'Steam';
            case buttons[2]: return 'Discord';
            default: return 'Unknown';
        }
    }

    function getOriginalText(button) {
        switch (button) {
            case buttons[0]: return 'Telegram <span class="astro-5NTVGBE6">&rarr;</span>';
            case buttons[1]: return 'Steam <span class="astro-5NTVGBE6">&rarr;</span>';
            case buttons[2]: return 'Discord <span class="astro-5NTVGBE6">&rarr;</span>';
            case buttons[3]: return 'VK [inactive]';
            case buttons[4]: return 'YouTube [inactive]';
            case buttons[5]: return 'Donate <span class="astro-5NTVGBE6">&rarr;</span>';
            default: return 'Unknown';
        }
    }
});
