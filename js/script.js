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
        'Telegram': 'telegram@example.com',
        'Steam': 'steam@example.com',
        'Discord': 'discord@example.com'
    };
    let isDonateMenuVisible = false;

    donateButton.addEventListener('click', function() {
        if (!isDonateMenuVisible) {
            // Switch to donate options
            buttons.forEach(button => {
                if (button !== donateButton) {
                    button.classList.add('fade-out');
                }
            });

            // Change text after fading out
            setTimeout(() => {
                buttons.forEach(button => {
                    if (button !== donateButton) {
                        button.querySelector('h2').textContent = getPaymentMethod(button);
                        button.querySelector('.wallet-address').textContent = walletAddresses[getPaymentMethod(button)] || '';
                    } else {
                        button.querySelector('h2').innerHTML = 'Back &larr;';
                    }
                });

                // Trigger fade-in after text change
                setTimeout(() => {
                    buttons.forEach(button => {
                        button.classList.remove('fade-out');
                        button.classList.add('fade-in');
                        if (button !== donateButton) {
                            button.querySelector('.wallet-address').classList.add('visible');
                        }
                    });
                }, 50); // Short delay to ensure fade-out completes
            }, 300); // Match this with the CSS transition duration for fade-out

            isDonateMenuVisible = true;
        } else {
            // Switch back to original buttons
            buttons.forEach(button => {
                button.classList.add('fade-out');
                button.querySelector('.wallet-address').classList.remove('visible');
            });

            // Change text back after fading out
            setTimeout(() => {
                buttons.forEach(button => {
                    button.querySelector('h2').innerHTML = getOriginalText(button);
                });

                // Trigger fade-in after text change
                setTimeout(() => {
                    buttons.forEach(button => {
                        button.classList.remove('fade-out');
                        button.classList.add('fade-in');
                    });
                }, 50); // Short delay to ensure fade-out completes
            }, 300); // Match this with the CSS transition duration for fade-out

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
