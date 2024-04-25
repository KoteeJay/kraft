var harmbuger = document.getElementById('menu')
var menuslider = document.getElementById('menuslider')
var closeButton = document.getElementById('x')
is_open = false

harmbuger.addEventListener("click", () => {

    if (is_open == false) {
        harmbuger.style.display = "none";
        menuslider.style.left = "0"
        is_open = true;
    }
    if (is_open == true) {
        closeButton.addEventListener('click', () => {

            menuslider.style.left = "100%"
            harmbuger.style.display = "block"
            is_open = false
        })

    }
});