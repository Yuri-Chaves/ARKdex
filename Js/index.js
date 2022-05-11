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
        const removeLastInfo = document.querySelector('.see')
        removeLastInfo.classList.remove('see') 
        const infoDefault = document.getElementById(idDinoSelected + '_info_tabela')
        infoDefault.classList.add('see')
        const subNavOpen = document.querySelector('.op')
        subNavOpen.classList.remove('op')
        const subNavDefault = document.getElementById('tabela')
        subNavDefault.classList.add('op')


        const navOpen = document.querySelector('.ativo')
        navOpen.classList.remove('ativo')
        const navToOpen = document.getElementById(idDinoSelected)
        navToOpen.classList.add('ativo')

        const subSelect = document.querySelectorAll('.sub')
        const infoDino = document.querySelectorAll('.i')
        subSelect.forEach(info => {
            info.addEventListener('click', () => {
                const infoOpen = document.querySelector('.see')
                infoOpen.classList.remove('see')
                const idInfoSelected = info.attributes.id.value
        
                const infoToOpen = document.getElementById(idDinoSelected + '_info_' + idInfoSelected)
                infoToOpen.classList.add('see')
        
                const navOpen = document.querySelector('.op')
                navOpen.classList.remove('op')
                const navToOpen = document.getElementById(idInfoSelected)
                navToOpen.classList.add('op')
            })
        })
    })
})