import '../css/common.css'; 
import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector('#exampleModal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
    btnSecondary: document.querySelector('.btn-secondary')
  };

const PROMPT_DELAY = 2000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#exampleModal')

// openModal()

 refs.modal.addEventListener('hidden.bs.modal', () => {
  openModal()
 })
 refs.subscribeBtn.addEventListener('click', () => {
   hasSubscribed = true
   modal.hide()
 })

 function openModal() {
   if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
     console.log('Max amount or subscribed')
     return
   }

   setTimeout(() => {
    modal.show()
    console.log('Modal open')
    promptCounter += 1
   }, PROMPT_DELAY);
 }
  
  modal.show()
  console.log(modal);




 