const open = document.querySelector('.open')
const close = document.querySelector('.close')
const circle = document.querySelector('.circle')
const container = document.querySelector('.container')
const nav = document.querySelector('nav')

open.addEventListener('click', () => {
    circle.classList.add('rotate-circle')
    container.classList.add('rotate-container')
    nav.classList.add('slide-in')
})

close.addEventListener('click', () => {
    circle.classList.remove('rotate-circle')
    container.classList.remove('rotate-container')
    nav.classList.remove('slide-in')
})