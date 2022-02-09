const menuDropdown = document.getElementById('dropdown')
const menuBtn = document.querySelector('.menu-button')
let menuVisible = false

menuBtn.addEventListener('click', () => {
    if(menuVisible) {
        menuDropdown.style.opacity = 0
        menuVisible = false
        setTimeout(() => {
            menuDropdown.style.display = 'none'
        }, 300)
    }
    else {
        menuDropdown.style.display = 'block'
        setTimeout(() => {
            menuDropdown.style.opacity = 1
            menuVisible = true
        }, 100)
        
    }
})
