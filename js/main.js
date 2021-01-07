function toggleMenu() {
    const menu = document.querySelector('.menu')
    const toggle = document.querySelector('.toggle')

    menu.classList.toggle('active')
    toggle.classList.toggle('active')
}
function itemActive(data, isMenu = false, isLogo = false) {
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
        isLogo == true ? data.forEach((item) => { item.classList.remove('active') }) : ''
    })
}
function removeActive(data){
    data.forEach((item) => { item.classList.remove('active') })
}
const grid = new Muuri('.projects__content', {
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
    document.querySelector('.projects__content').classList.add('img-loaded')

    //ADD CLASS TO ITEM ACTIVE FROM CATEGORIES
    const categories = document.querySelectorAll('#categories a')
    itemActive(categories)

    //ADD CLASS TO ITEM ACTIVE FROM MENU
    const menu = document.querySelectorAll('.menu a')
    itemActive(menu, true)
    const logo = document.querySelector('.logo')
    logo.addEventListener('click', () => { itemActive(menu, true, true) })

    //ACTIVE CLASS ON SCROLL
    const sections = document.querySelectorAll('section');
    onscroll = ()=>{
        const scrollPosition = document.documentElement.scrollTop;
        sections.forEach(section =>{
            if(scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight){
                const currentId = section.attributes.id.value
                removeActive(menu)
                const item = `nav a[href="#${currentId}"]`
                document.querySelector(item).classList.add('active')
            }  
        })
    }
}
//ANIMATIONS
AOS.init();

