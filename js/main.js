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

    //CERTIFICATES
    const images = [
        { img: 'images/certificado-html.webp' },
        { img: 'images/certificado-master-css.webp' },
        { img: 'images/certificado-pug.webp' },
        { img: 'images/certificado-crear-pagina-web-desde-cero.webp' },
        { img: 'images/certificado-master-js.webp' }
    ]
    let count = 0;
    const slide = document.querySelector('.slide-show')
    const overlay = document.querySelector('.certificate__overlay')
    const galeryImg = document.querySelectorAll('.certificate__content img')
    const imgSlideShow = document.getElementById('img__slideshow')

    slide.addEventListener('click', (e) => {
        let back = slide.querySelector('.btn-back')
        let next = slide.querySelector('.btn-next')
        let img = slide.querySelector('img')
        let tgt = e.target;

        if (tgt == back) {
            if (count > 0) {
                img.src = images[count - 1].img
                count--
            }
            else {
                img.src = images[images.length - 1].img
                count = images.length - 1
            }
        }
        else if (tgt == next) {
            if (count < images.length - 1) {
                img.src = images[count + 1].img
                count++
            }
            else {
                img.src = images[0].img
                count = 0
            }
        }
    })
    Array.from(galeryImg).forEach(img => {
        img.addEventListener('click', (e) => {
            const imageSelected = +e.target.dataset.certificate
            imgSlideShow.src = images[imageSelected].img
            count = imageSelected
            overlay.style.opacity = 1
            overlay.style.visibility = "visible"
        })
        document.querySelector('.btn-close').addEventListener('click', ()=>{
            overlay.style.opacity = 0
            overlay.style.visibility = "hidden"
        })
    })
}
function isDarkTheme() {
    const route = document.getElementById('theme')
    const theme = localStorage.getItem('theme')
    const themeDark = document.getElementById('themeDark')
    const themeLight = document.getElementById('themeLight')

    theme == 'dark' ? route.href = "css/dark.css" : route.href = ""
    if (theme == 'dark') {
        themeDark.style.display = 'none'
        themeLight.style.display = 'block'
    }
    else {
        themeDark.style.display = 'block'
        themeLight.style.display = 'off'
    }
}
//ANIMATIONS
AOS.init();

