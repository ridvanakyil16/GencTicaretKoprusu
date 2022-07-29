const textEl = document.querySelector('.content-banner')

let idx = 1
let speed = 40
let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem, neque.'

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = text.length
    } else {
        setTimeout(writeText, speed)
        console.log('elma')
    }

}


const navbarToggle = document.querySelector('.fa-bars')
const navbarMobile = document.querySelector('.navbarAlt')

navbarToggle.addEventListener('click', () => {
    console.log('merhaba')
    navbarMobile.classList.toggle('active')
})