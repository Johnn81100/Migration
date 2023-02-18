const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,}$/gm;
const password = document.querySelectorAll("input[type=password]");
const submit = document.querySelector("#change_password_save");
let messages =  document.querySelectorAll('.message');


submit.addEventListener("click",(e)=>
{
  document.querySelectorAll('.message')[1].textContent =""; 
  const icone= document.createElement('span');
  const text= document.createElement('p');
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
  text.setAttribute('class','text'); 
  document.querySelectorAll('.message')[1].insertBefore(icone,null);
  document.querySelectorAll('.message')[1].appendChild(text);
  document.querySelector('.exclamation').textContent ='error';
  password[1].style.border = '2px solid #C34537';
  password[1].style.borderRadius = '2px';
  document.querySelectorAll('.message')[1].style.color='var(--color-alert)';

  if (password[1].value.length == 0 )
  {
    e.preventDefault();
    document.querySelector('.text').textContent =' Ce champs est requis.';
  } 
  else 
  {
    if (password[1].value.match(regex) == null) 
    {  
        
        document.querySelector('.text').textContent =" Doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.";
        e.preventDefault();
    }

    else if(((password[1].value == password[2].value || password[1].value == password[2].value) && password[1].value.match(regex) != null ))
    {
        password[1].style.border = '1px solid #798C73';
        password[0].style.border = '1px solid #798C73';
        document.querySelectorAll('.message')[2].textContent ="";
        document.querySelectorAll('.message')[1].textContent ="";
    }

    else 
    {
        password[1].style.border = '1px solid #798C73';
        document.querySelectorAll('.message')[1].textContent ="";
    }   
  }
})

submit.addEventListener("click",(e)=>
{
   
   const icone= document.createElement('span');
   const text= document.createElement('p');
   icone.setAttribute('class','material-symbols-sharp exclamation1'); 
   text.setAttribute('class','text-1'); 
   document.querySelectorAll('.message')[2].insertBefore(icone,null);
   document.querySelectorAll('.message')[2].appendChild(text);
   document.querySelector('.exclamation1').textContent ='error';
   password[2].style.border = '2px solid #C34537';
   password[2].style.borderRadius = '2px';
   document.querySelectorAll('.message')[2].style.color='var(--color-alert)';

    if (password[2].value.length == 0) 
    {
        e.preventDefault();
        document.querySelector('.text-1').textContent =' Ce champs est requis.';     
    } 
    else
    {
        if (password[2].value.match(regex) == null) 
        {
           
            e.preventDefault();
            document.querySelector('.text-1').textContent =' Doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
        } 
        else 
        {
            if(((password[1].value == password[2].value || password[1].value == password[2].value) && password[2].value.match(regex) != null ))
            {
                password[1].style.border = '1px solid #798C73';
                password[2].style.border = '1px solid #798C73';
                document.querySelectorAll('.message')[1].textContent ="";
                document.querySelectorAll('.message')[2].textContent ="";
            }
             else if( (password[2].value != password[1].value || password[1].value != password[2].value ) && password[2].value.length > 0  )
            {
                e.preventDefault();   
                document.querySelector('.text-1').textContent =" Mot de passe non identiques.";  
                             
            }   
            else
            {
                password[2].style.border = '1px solid #798C73';
            }
        }
    }
})