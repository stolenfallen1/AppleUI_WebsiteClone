// Enable hamburger button animation 
document.addEventListener("DOMContentLoaded", () => {
    const selectElement = (element) => document.querySelector(element)
    selectElement(".mobile-menu").addEventListener("click", () => {
        selectElement("header").classList.toggle("active")
    })
})
// Change header color to white when scrolled
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header")
        if (window.scrollY > 0) {
            header.classList.add("header-scrolled")
        } else {
            header.classList.remove("header-scrolled")
        }
    })
})




