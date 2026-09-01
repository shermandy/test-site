const open = document.getElementById("menu-open")
const close = document.getElementById("menu-close")
const menu = document.getElementById("menu")
const sisters = document.getElementById("sister-sites")

open.addEventListener("click", function(){
    openMenu()
})

close.addEventListener("click", function(){
    closeMenu()
})

function closeMenu() {
    close.style.display = "none"
    open.style.display = "inline"
    menu.style.display = "none"
    sisters.style.display = "none"
}
function openMenu() {
    close.style.display = "inline"
    open.style.display = "none"
    menu.style.display = "block"
    sisters.style.display = "block"
}