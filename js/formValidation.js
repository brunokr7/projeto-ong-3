
export function validateDonationForm(formEl){
  const name = formEl.querySelector('[name="name"]');
  const email = formEl.querySelector('[name="email"]');
  const amount = formEl.querySelector('[name="amount"]');
  let valid = true;
  if(!name.value.trim()){setErr(name,'Nome obrigatório'); valid=false;} else ok(name);
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){setErr(email,'Email inválido'); valid=false;} else ok(email);
  if(parseFloat(amount.value)<1){setErr(amount,'Valor inválido'); valid=false;} else ok(amount);
  return valid;
}
function setErr(el,msg){el.classList.add('invalid');el.nextElementSibling.textContent=msg;}
function ok(el){el.classList.remove('invalid');el.classList.add('valid');el.nextElementSibling.textContent='';}
