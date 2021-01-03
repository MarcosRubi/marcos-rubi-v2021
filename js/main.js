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
                const categorie = element.innerHTML.toLowerCase();
                categorie === 'todos' ? grid.filter('[data-categorie]') : grid.filter(`[data-categorie = ${categorie}]`)
            }
        })
    })
}
const grid = new Muuri('.projects', {
    layout: {
        rounding: false
    }
});
window.onload = () => {
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", scrollY > 0);
    });

    grid.refreshItems().layout()
    document.querySelector('.projects').classList.add('img-loaded')

    const categories = document.querySelectorAll('#categories a')
    itemActive(categories);

    const menu = document.querySelectorAll('.menu a')
    itemActive(menu, true)


};

