


/* <-------------------------------------- Input type checkbox ----------------------------------------->*/
const checkbox = document.querySelector("input[type=checkbox]");
checkbox.addEventListener("click",()=>
{   
    if(checkbox.value == "yes"){

        document.querySelector('#invoicing_settings_name').disabled = false;
        document.querySelector('#invoicing_settings_address').disabled = false;
        document.querySelector('#invoicing_settings_zipCode').disabled = false;
        document.querySelector('#invoicing_settings_city').disabled = false;
        checkbox.value = "no"

    }
    else{
        document.querySelector('#invoicing_settings_name').disabled = true;
        document.querySelector('#invoicing_settings_address').disabled = true;
        document.querySelector('#invoicing_settings_zipCode').disabled = true;
        document.querySelector('#invoicing_settings_city').disabled = true;
        checkbox.value = "yes"
    }
      
})

/* <--------------------------------------check  Email ----------------------------------------->*/
const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
const email = document.querySelector("#invoicing_settings_contactMail");
let messages =  document.querySelectorAll('.message');
const submit = document.querySelector("button[type=submit]");

// on écoute l'événement au clic du bouton submit 
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //récupération d'un paragraphe 
  const text= document.createElement('p');
  //ajout de classe sur la variable icone
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
   //ajout de classe sur la variable  text
  text.setAttribute('class','text'); 
   //insertion  de la balise span dans le parent   message 
  messages[0].appendChild(icone);
  //insertion à la dernière place   du  paragraphe  dans le parent   message    
  messages[0].appendChild(text);
  // ajout de text dans la balise span 
  messages[0].querySelector('.exclamation').textContent ='error';
  // modification du border  de l'input email
  email.style.border = '1px solid #C34537';
  email.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[0].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input email  est égal à zéro 
  if (email.value.length == 0 )
  {
    // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
    //suite   à l'envoie du formulaire 
    e.preventDefault();
    messages[0].classList.remove('hidden');
    // ajout de  texte dans le paragraphe 
    messages[0].querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {
    // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
    if (email.value.match(regexEmail) == null) 
    {  
        e.preventDefault();
        messages[0].classList.remove('hidden');
        messages[0].querySelector('.text').textContent =" Email non valide";
    }
    else 
    {
      messages[0].classList.add('hidden');
      email.style.border = '1px solid #798C73';
      messages[0].textContent ="";
    }
  }
}) 
/* <--------------------------------------check  Name ----------------------------------------->*/
const regexName =/^([A-Za-z -]+\s*)/gim;
const Name = document.querySelector('#invoicing_settings_name');
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //récupération d'un paragraphe 
  const text= document.createElement('p');
  //ajout de classe sur la variable icone
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
   //ajout de classe sur la variable  text
  text.setAttribute('class','text'); 
   //insertion  de la balise span dans le parent   message 
  messages[1].appendChild(icone);
  //insertion à la dernière place   du  paragraphe  dans le parent   message    
  messages[1].appendChild(text);
  // ajout de text dans la balise span 
  messages[1].querySelector('.exclamation').textContent ='error';
  // modification du border  de l'input email
  Name.style.border = '1px solid #C34537';
  Name.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[1].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input email  est égal à zéro 
  if (Name.value.length == 0 )
  {
    // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
    //suite   à l'envoie du formulaire 
    e.preventDefault();
    messages[1].classList.remove('hidden');
    // ajout de  texte dans le paragraphe 
    messages[1].querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {   
      messages[1].classList.add('hidden');
      Name.style.border = '1px solid #798C73';
      messages[1].textContent ="";
    
  }
})
/* <--------------------------------------check  Adress ----------------------------------------->*/
const regexAdress= /^\s*[0-9a-zA-Z \/]*$/gim;
const adress = document.querySelector("#invoicing_settings_address");
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //récupération d'un paragraphe 
  const text= document.createElement('p');
  //ajout de classe sur la variable icone
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
   //ajout de classe sur la variable  text
  text.setAttribute('class','text'); 
   //insertion  de la balise span dans le parent   message 
  messages[2].appendChild(icone);
  //insertion à la dernière place   du  paragraphe  dans le parent   message    
  messages[2].appendChild(text);
  // ajout de text dans la balise span 
  messages[2].querySelector('.exclamation').textContent ='error';
  // modification du border  de l'input email
  adress.style.border = '1px solid #C34537';
  adress.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[2].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input email  est égal à zéro 
  if (adress.value.length == 0 )
  {
    // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
    //suite   à l'envoie du formulaire 
    e.preventDefault();
    messages[2].classList.remove('hidden');
    // ajout de  texte dans le paragraphe 
    messages[2].querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {   
      messages[2].classList.add('hidden');
      adress.style.border = '1px solid #798C73';
      messages[2].textContent ="";
    
  }
})
/* <--------------------------------------check  postalCode ----------------------------------------->*/
const regexZipCode=/^[0-9]*$/gim;
const zipCode = document.querySelector("#invoicing_settings_zipCode");
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //récupération d'un paragraphe 
  const text= document.createElement('p');
  //ajout de classe sur la variable icone
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
   //ajout de classe sur la variable  text
  text.setAttribute('class','text'); 
   //insertion  de la balise span dans le parent   message 
  messages[3].appendChild(icone);
  //insertion à la dernière place   du  paragraphe  dans le parent   message    
  messages[3].appendChild(text);
  // ajout de text dans la balise span 
  messages[3].querySelector('.exclamation').textContent ='error';
  // modification du border  de l'input email
  zipCode.style.border = '1px solid #C34537';
 zipCode.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[3].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input email  est égal à zéro 
  if (zipCode.value.length == 0 )
  {
    // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
    //suite   à l'envoie du formulaire 
    e.preventDefault();
    messages[3].classList.remove('hidden');
    // ajout de  texte dans le paragraphe 
    messages[3].querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {
    if (zipCode.value.match(regexZipCode) == null) 
      {  
          e.preventDefault();
          messages[3].classList.remove('hidden');
          messages[3].querySelector('.text').textContent =" Format non valide";
      }
      else 
      {
        messages[3].classList.add('hidden');
        zipCode.style.border = '1px solid #798C73';
        messages[3].textContent ="";
      }        
  }
})

/* <--------------------------------------check  city ----------------------------------------->*/
const regexCity= /^\s*[a-zA-Z]{1}[a-zA-Z][a-zA-Z "-.=#\/]*$/gim;
const city = document.querySelector("#invoicing_settings_city");
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //récupération d'un paragraphe 
  const text= document.createElement('p');
  //ajout de classe sur la variable icone
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
   //ajout de classe sur la variable  text
  text.setAttribute('class','text'); 
   //insertion  de la balise span dans le parent   message 
  messages[4].appendChild(icone);
  //insertion à la dernière place   du  paragraphe  dans le parent   message    
  messages[4].appendChild(text);
  // ajout de text dans la balise span 
  messages[4].querySelector('.exclamation').textContent ='error';
  // modification du border  de l'input email
  zipCode.style.border = '1px solid #C34537';
 zipCode.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[4].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input email  est égal à zéro 
  if (city.value.length == 0 )
  {
    // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
    //suite   à l'envoie du formulaire 
    e.preventDefault();
    messages[4].classList.remove('hidden');
    // ajout de  texte dans le paragraphe 
    messages[4].querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {
    if (city.value.match(regexCity) == null) 
      {  
          e.preventDefault();
          messages[4].classList.remove('hidden');
          messages[4].querySelector('.text').textContent =" Format non valide";
      }
      else 
      {
        messages[4].classList.add('hidden');
        city.style.border = '1px solid #798C73';
        messages[4].textContent ="";
      }        
  }
})


