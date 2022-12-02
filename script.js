import timer from './modules/timer';
import switchModal from './modules/switherWindowModal'
import senMasageJson from './modules/postDb'
window.addEventListener('DOMContentLoaded', () => { 
    timer('.timer','2022-12-11')
    switchModal()
    senMasageJson()
})