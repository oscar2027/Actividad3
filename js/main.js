
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");


function openModal() {
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}


openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});
