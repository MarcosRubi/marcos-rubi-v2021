function toggleMenu() {
    const menu = document.querySelector('.menu')
    const toggle = document.querySelector('.toggle')

    menu.classList.toggle('active')
    toggle.classList.toggle('active')
}
function itemActive(data, isMenu = false) {
    data.forEach((element) => {
        element.addEventListener('click', (e) => {

            data.forEach((item) => { item.classList.remove('active') })
            element.classList.add('active')
            if (isMenu == false) {
                e.preventDefault()
                const categorie = element.innerHTML.toLowerCase()
                categorie === 'todos' ? grid.filter('[data-categorie]') : grid.filter(`[data-categorie = ${categorie}]`)
            }
        })
    })
}

const grid = new Muuri('.projects', {
    layout: {
        rounding: false
    }
})
feather.replace()

window.onload = () => {
    //HEADER STICKY
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header")
        header.classList.toggle("sticky", scrollY > 0)
    })

    //GRID LAYOUTS TO PROJECTS
    grid.refreshItems().layout()
    document.querySelector('.projects').classList.add('img-loaded')

    //ADD CLASS TO ITEM ACTIVE FROM CATEGORIES
    const categories = document.querySelectorAll('#categories a')
    itemActive(categories)

    //ADD CLASS TO ITEM ACTIVE FROM MENU
    const menu = document.querySelectorAll('.menu a')
    itemActive(menu, true)
}
//ANIMATIONS
AOS.init();

