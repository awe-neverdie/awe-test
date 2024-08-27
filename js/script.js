window.onload = function () {
        setTimeout(function () {
            document.querySelector('.loader-container').style.opacity = '0';
            document.querySelector('main').style.opacity = '1';
            document.body.style.overflowY = 'scroll';
        }, 1000);
    };
