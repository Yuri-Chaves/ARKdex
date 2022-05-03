// trocando cartões
const listSelect = document.querySelectorAll('.dino')
const cardDino = document.querySelectorAll('.card')
listSelect.forEach(dino => {
    dino.addEventListener('click', () => {
        const cardOpen = document.querySelector('.open')
        cardOpen.classList.remove('open')
        const idDinoSelected = dino.attributes.id.value

        const cardToOpen = document.getElementById(idDinoSelected + '_card')
        cardToOpen.classList.add('open')

        const navOpen = document.querySelector('.ativo')
        navOpen.classList.remove('ativo')
        const navToOpen = document.getElementById(idDinoSelected)
        navToOpen.classList.add('ativo')
    })
})