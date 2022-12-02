   function switchModal(){
    function closeModalWindow(switcher,windowModal){
        const closeModal = document.querySelector(switcher)
        const modalWindow = document.querySelector(windowModal)
        closeModal.addEventListener("click",()  => {
            modalWindow.style.display = "none"
        })
    }
    function showModalWindow(windowModal,itmBtn){
        const modalWindow = document.querySelector(windowModal)
        itmBtn.addEventListener('click',() => {
            modalWindow.style.display = "block"
        })
    }
    const showModal = document.querySelectorAll('.book-curse')
    showModal.forEach(item => {
        showModalWindow(".modal",item)
    })
    closeModalWindow('.modal__close','.modal')
}
export default switchModal