const acordeonElements = document.querySelectorAll('.acordeon .element')

acordeonElements.forEach(element => {
    element.addEventListener('click', () => {
        acordeonElements.forEach(el => el.classList.remove('active'))
        element.classList.add('active')
    });
})