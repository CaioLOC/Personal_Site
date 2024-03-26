function openModalLearnMore() {
    const modalLearnMore = document.getElementById('modal-fade')
    modalLearnMore.classList.add('open')

    modalLearnMore.addEventListener('click', (e) => {
        if(e.target.id == 'close-modal' || e.target.id == 'modal-fade') {
            modalLearnMore.classList.remove('open')
        }
    })
}