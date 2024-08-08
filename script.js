const fotos = document.querySelectorAll("foto")

fotos.forEach(foto => {
    foto.addEventListener("click", () => {
        removefoto ()
        fotos.classList.add("active")
    })
})

const removefoto = () => {
    fotos.forEach(foto => {
        foto.classList.remove("remove")
    })
}