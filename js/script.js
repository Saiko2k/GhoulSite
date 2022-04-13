const btnOpen = document.getElementById("btn");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("modal-close")
btnOpen.addEventListener("click", () => {
    modal.classList.add("show");
    setTimeout(() => {
        modal.classList.remove("show");
    }, 3000);
});


btnClose.addEventListener("click", () => {
    modal.classList.remove("show");
})
