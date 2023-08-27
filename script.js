document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".navigation-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const nextPage = this.getAttribute("data-next-page");
            window.location.href = nextPage;
        });
    });
});
