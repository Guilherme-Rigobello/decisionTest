const img = document.querySelector(".img");
const yes = document.querySelector(".yes");

yes.addEventListener('click', () => {
    img.style.display = "flex"
})


const no = document.querySelector(".no");

no.addEventListener('mouseover', () => {
    no.style.display = "none"
})

no.addEventListener('mouseleave', () => {
    no.style.display = "inline"
})