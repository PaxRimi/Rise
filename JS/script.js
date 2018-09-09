document.addEventListener("DOMContentLoaded", function(event) {

    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputPhone = document.getElementById("phone");
    const inputMessage = document.getElementById("message");
    const topBtn = document.getElementById("TopBtn");

    inputName.addEventListener("focus",function () {
        const label = this.previousElementSibling;
        label.style.top = "-17px";
        label.style.left = "42px";
    });

    inputName.addEventListener("blur",function () {
        if(this.value.length === 0) {
            const label = this.previousElementSibling;
            label.removeAttribute("style");
            label.style.top = "1px";
        }
    });

    inputEmail.addEventListener("focus",function () {
        const label = this.previousElementSibling;
        label.style.top = "41px";
        label.style.left = "42px";
    });

    inputEmail.addEventListener("blur",function () {
        if(this.value.length === 0) {
            const label = this.previousElementSibling;
            label.removeAttribute("style");
            label.style.top = "60px";
        }
    });

    inputPhone.addEventListener("focus",function () {
        const label = this.previousElementSibling;
        label.style.top = "98px";
        label.style.left = "42px";
    });

    inputPhone.addEventListener("blur",function () {
        if(this.value.length === 0) {
            const label = this.previousElementSibling;
            label.removeAttribute("style");
            label.style.top = "116px";
        }
    });

    inputMessage.addEventListener("focus",function () {
        const label = this.previousElementSibling;
        label.style.top = "155px";
        label.style.left = "42px";
    });

    inputMessage.addEventListener("blur",function () {
        if(this.value.length === 0) {
            const label = this.previousElementSibling;
            label.removeAttribute("style");
            label.style.top = "190px";
        }
    });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    topBtn.addEventListener("click",goTop);

    function goTop() {
        let t1;
        let y1 = window.scrollY;
        y1 = y1 - 200;
        window.scrollTo(0, y1);
        if (y1 > 0) {
            t1 = setTimeout(goTop, 100);
        } else {
            clearTimeout(t1);
        }
    }
});