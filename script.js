const page = document.querySelector('.wrapper');
const navItems = document.querySelectorAll('.listItem');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        page.style.transform = `translateX(${-100 * index}vw)`;
    })
})
