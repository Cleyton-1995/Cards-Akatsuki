// Referencia a classe akatsuki
const listSelectionAkatsuki = document.querySelectorAll(' .akatsuki');

// Referencia a classe card-akatsuki
const akatsukiCard = document.querySelectorAll(' .card-akatsuki');

listSelectionAkatsuki.forEach(akatsuki => {
    akatsuki.addEventListener('click', () => {

        const cardAkatsukiOpen = document.querySelector(' .open')
        cardAkatsukiOpen.classList.remove('open')

        const idAkatsukiSelectioned = akatsuki.attributes.id.value

        const idOfCardAkatsukiForOpen = 'card-' + idAkatsukiSelectioned
        const cardAkatsukiForOpen = document.getElementById(idOfCardAkatsukiForOpen)
        cardAkatsukiForOpen.classList.add('open')
        
        
        const akatsukiActiveList = document.querySelector(' .active')
        akatsukiActiveList.classList.remove('active')
        
        const akatsukiSelectionedInList = document.getElementById(idAkatsukiSelectioned)
        akatsukiSelectionedInList.classList.add('active')

    })
})
