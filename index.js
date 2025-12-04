
        function toggleNav() {
            const nav = document.getElementById("myNav");
            if (nav.style.left === "-250px") {
                nav.style.left = "0";
            } else {
                nav.style.left = "-250px";
            }
        }

        function removeBlur(img) {
    img.classList.add('clicked');
}
