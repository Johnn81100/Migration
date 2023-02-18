const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
const email = document.querySelector("input[type=text]");
let messages =  document.querySelectorAll('.message');
const submit = document.querySelector("button[type=submit]");

submit.addEventListener('click',(e)=>
{
  const icone= document.createElement('span');
  const text= document.createElement('p');
  icone.setAttribute('class','material-symbols-sharp exclamation1'); 
  text.setAttribute('class','text'); 
  document.querySelectorAll('.message')[0].insertBefore(icone,null);
  document.querySelectorAll('.message')[0].appendChild(text);
  document.querySelector('.exclamation1').textContent ='error';
  email.style.border = '2px solid #C34537';
  email.style.borderRadius = '2px';
  document.querySelectorAll('.message')[0].style.color='var(--color-alert)'

  if (email.value.length == 0 )
  {
    e.preventDefault();
    document.querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {
    if (email.value.match(regexEmail) == null) 
    {  
        e.preventDefault();
        document.querySelector('.text').textContent =" Email non valide";
    }
    else 
    {
      email.style.border = '1px solid #798C73';
      document.querySelectorAll('.message')[0].textContent ="";
    }
  }
})

