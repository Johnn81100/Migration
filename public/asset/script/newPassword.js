
/* <----------------------------------eye password-------------------------->*/
let eyes = document.querySelectorAll(".eye");
let eyesOff = document.querySelectorAll(".eye-off");
const passwordFields = document.querySelectorAll("input[type=password]");

eyes[0].addEventListener("click", () =>
{   
    eyes[0].style.visibility="hidden";
    eyesOff[0].style.visibility="visible";
    passwordFields[0].type = "text";
});
eyesOff[0].addEventListener("click", () =>
{
    eyesOff[0].style.visibility ="hidden";
    eyes[0].style.visibility="visible";
    passwordFields[0].type = "password";
});
eyes[1].addEventListener("click", () =>
{   
    eyes[1].style.visibility="hidden";
    eyesOff[1].style.visibility="visible";
    passwordFields[1].type = "text";
});
eyesOff[1].addEventListener("click", () =>
{
    eyesOff[1].style.visibility ="hidden";
    eyes[1].style.visibility="visible";
    passwordFields[1].type = "password";
});
/*<------------------------------------------Check of the two password---------------------------------->*/

const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,}$/gm;
const password = document.querySelectorAll("input[type=password]");
const submit = document.querySelector(".button-submit");
let messages =  document.querySelectorAll('.message');


submit.addEventListener("click",(e)=>
{
  document.querySelectorAll('.message')[0].textContent =""; 
  const icone= document.createElement('span');
  const text= document.createElement('p');
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
  text.setAttribute('class','text'); 
  document.querySelectorAll('.message')[0].insertBefore(icone,null);
  document.querySelectorAll('.message')[0].appendChild(text);
  document.querySelector('.exclamation').textContent ='error';
  password[0].style.border = '2px solid #C34537';
  password[0].style.borderRadius = '2px';
  document.querySelectorAll('.message')[0].style.color='var(--color-alert)';

  if (password[0].value.length == 0 )
  {
    e.preventDefault();
    document.querySelector('.text').textContent =' Ce champs est requis.';
  } 
  else 
  {
    if (password[0].value.match(regex) == null) 
    {  
        
        document.querySelector('.text').textContent =" Doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.";
        e.preventDefault();
    }

    else if(((password[1].value == password[0].value || password[0].value == password[1].value) && password[0].value.match(regex) != null ))
    {
        password[1].style.border = '1px solid #798C73';
        password[0].style.border = '1px solid #798C73';
        document.querySelectorAll('.message')[1].textContent ="";
        document.querySelectorAll('.message')[0].textContent ="";
    }

    else 
    {
        password[0].style.border = '1px solid #798C73';
        document.querySelectorAll('.message')[0].textContent ="";
    }   
  }
})

submit.addEventListener("click",(e)=>
{
   
   const icone= document.createElement('span');
   const text= document.createElement('p');
   icone.setAttribute('class','material-symbols-sharp exclamation1'); 
   text.setAttribute('class','text-1'); 
   document.querySelectorAll('.message')[1].insertBefore(icone,null);
   document.querySelectorAll('.message')[1].appendChild(text);
   document.querySelector('.exclamation1').textContent ='error';
   password[1].style.border = '2px solid #C34537';
   password[1].style.borderRadius = '2px';
   document.querySelectorAll('.message')[1].style.color='var(--color-alert)';

    if (password[1].value.length == 0) 
    {
        e.preventDefault();
        document.querySelector('.text-1').textContent =' Ce champs est requis.';     
    } 
    else
    {
        if (password[1].value.match(regex) == null) 
        {
           
            e.preventDefault();
            document.querySelector('.text-1').textContent =' Doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
        } 
        else 
        {
            if(((password[1].value == password[0].value || password[0].value == password[1].value) && password[1].value.match(regex) != null ))
            {
                password[1].style.border = '1px solid #798C73';
                password[0].style.border = '1px solid #798C73';
                document.querySelectorAll('.message')[1].textContent ="";
                document.querySelectorAll('.message')[0].textContent ="";
            }
             else if( (password[0].value != password[1].value || password[1].value != password[0].value ) && password[1].value.length > 0  )
            {
                e.preventDefault();   
                document.querySelector('.text-1').textContent =" Mot de passe non identiques.";  
                             
            }   
            else
            {
                password[1].style.border = '1px solid #798C73';
            }
        }
    }
})


// submit.addEventListener("click",(e)=>
// {  
    
//     const icone= document.createElement('i');
//     document.querySelectorAll('.message')[1].textContent ="";

//     if (password[1].value.length == 0) 
//     {
//         e.preventDefault(); 
//         icone.setAttribute('class','fa-solid fa-circle-exclamation exclamation1');
//         document.querySelectorAll('.message')[1].appendChild(icone);
//         password[1].style.border = '1px solid #C34537';
//         document.querySelector('.exclamation1').textContent =' Ce champs est requis!';
//     } 
//     else
//     {
//         if (password[1].value.match(regex) == null) 
//         {
//             e.preventDefault(); 
//             icone.setAttribute('class','fa-solid fa-circle-exclamation exclamation1');
//             document.querySelectorAll('.message')[1].appendChild(icone);
//             password[1].style.border = '1px solid #C34537';
//             document.querySelector('.exclamation1').textContent =' Doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
//         } 
//         else 
//         {
//             if(password[1].value != password[0].value || password[0].value != password[1].value  )
//             {
//                 e.preventDefault(); 
//                 icone.setAttribute('class','fa-solid fa-circle-exclamation exclamation1');
//                 document.querySelectorAll('.message')[1].appendChild(icone);
//                 password[1].style.border = '1px solid #C34537';
//                 document.querySelector('.exclamation1').textContent =" Mot de passe non identiques";                  
//             }
//             else if((password[1].value == password[0].value && password[0].value == password[1].value ))
//             {
//                 password[1].style.border = '1px solid #798C73';
//                 password[0].style.border = '1px solid #798C73';
//                 document.querySelectorAll('.message')[1].textContent ="";
//                 document.querySelectorAll('.message')[0].textContent ="";
//             }   
//         }
//     }    
// })