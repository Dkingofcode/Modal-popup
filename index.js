const PopButton = document.getElementById("btn");
const Modal = document.getElementById("popup");
const closeBtn = document.getElementById("sec-btn");



PopButton.addEventListener("click", () => {
    Modal.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    Modal.classList.remove("open");
})




















