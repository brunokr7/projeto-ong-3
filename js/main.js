
import {navigateTo} from './router.js';
import {Storage} from './storage.js';
import {validateDonationForm} from './formValidation.js';
const app=document.getElementById('app');
async function render(){const res=await navigateTo();app.innerHTML=res.html||'';
  if(location.hash==='#/doar'){const form=document.getElementById('donation-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();if(validateDonationForm(form)){alert('Doação registrada');form.reset();}});}}
}
window.addEventListener('hashchange',render);window.addEventListener('load',render);
