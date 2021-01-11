function toggleMenu() {
    const menu = document.querySelector('.menu')
    const toggle = document.querySelector('.toggle')

    menu.classList.toggle('active')
    toggle.classList.toggle('active')
}
function itemActive(data) {
    data.forEach((element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault()

            removeActive(data)
            element.classList.add('active')
            const categorie = element.innerHTML.toLowerCase()
            categorie === 'todos' ? grid.filter('[data-categorie]') : grid.filter(`[data-categorie = ${categorie}]`)
        })
    })
}
function removeActive(data) {
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


    //ACTIVE CLASS ON SCROLL
    const sections = document.querySelectorAll('section')
    const menu = document.querySelectorAll('.menu a')
    onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop;
        sections.forEach(section => {
            if (scrollPosition + 1 >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
                const currentId = section.attributes.id.value
                if (currentId == 'banner') {
                    removeActive(menu)
                } else {
                    removeActive(menu)
                    const item = `nav a[href="#${currentId}"]`
                    document.querySelector(item).classList.add('active')
                }
            }
        })
    }

    //THEME DARK
    const themeDark = document.getElementById('themeDark')
    const themeLight = document.getElementById('themeLight')

    isDarkTheme();

    themeLight.addEventListener('click', () => {
        const route = document.getElementById('theme')

        localStorage.setItem('theme', 'light')
        route.href = ""
        themeLight.style.display = 'none'
        themeDark.style.display = 'block'
    })
    themeDark.addEventListener('click', () => {
        const route = document.getElementById('theme')

        localStorage.setItem('theme', 'dark')
        route.href = "css/dark.css"
        themeDark.style.display = 'none'
        themeLight.style.display = 'block'
    })

}
function isDarkTheme() {
    const route = document.getElementById('theme')
    const theme = localStorage.getItem('theme')
    const themeDark = document.getElementById('themeDark')
    const themeLight = document.getElementById('themeLight')

    theme == 'dark' ? route.href = "css/dark.css" : route.href = ""
    if(theme == 'dark'){
        themeDark.style.display = 'none'
        themeLight.style.display = 'block'
    }
    else{ 
        themeDark.style.display = 'block'
        themeLight.style.display = 'off'
    }
} 
//ANIMATIONS
AOS.init();

