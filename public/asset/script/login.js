//<-------------------------message Flash close-------------------------> */
const cross = document.querySelector('.close');
const alertS = document.querySelector('.alert_container')

function toogleAppFlash()
{
    if(alertS != null)
    {
        cross.addEventListener('click', ()=>
        {
            alertS.classList.toggle('closeFlash');
            console.log(alertS);
        })
    }
}
toogleAppFlash();
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
/* <--------------------------------------check  Email ----------------------------------------->*/
//création du regex email
const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
//récupération de l'input email
const email = document.querySelector("input[type=text]");
// récupération des éléments avec la  classe .message 
let messages =  document.querySelectorAll('.message');
//récupération du bouton submit 
const submit = document.querySelector("button[type=submit]");
// on écoute l'événement au clic du bouton submit 
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //création d'un paragraphe 
  const text= document.createElement('p');
  //ajout de classe sur la variable icone
  icone.setAttribute('class','material-symbols-sharp exclamation1'); 
   //ajout de classe sur la variable  text
  text.setAttribute('class','text'); 
   //insertion  de la balise span dans le parent   message 
  document.querySelectorAll('.message')[0].insertBefore(icone,null);
  //insertion à la dernière place   du  paragraphe  dans le parent   message    
  document.querySelectorAll('.message')[0].appendChild(text);
  // ajout de text dans la balise span 
  document.querySelector('.exclamation1').textContent ='error';
  // modification du border  de l'input email
  email.style.border = '1px solid #C34537';
  email.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  document.querySelectorAll('.message')[0].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input email  est égal à zéro 
  if (email.value.length == 0 )
  {
    // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
    //suite   à l'envoie du formulaire 
    e.preventDefault();
    // ajout de  texte dans le paragraphe 
    document.querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {
    // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
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

/*<------------------------------------------Check of the  password---------------------------------->*/
const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,}$/gm;
const password = document.querySelectorAll("input[type=password]");

submit.addEventListener("click",(e)=>
{  

  const icone= document.createElement('span');
  const text= document.createElement('p');
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
  text.setAttribute('class','text1'); 
  document.querySelectorAll('.message')[1].insertBefore(icone,null);
  document.querySelectorAll('.message')[1].appendChild(text);
  document.querySelector('.exclamation').textContent ='error';
  password[0].style.border = '1px solid #C34537';
  password[0].style.borderRadius = '2px';
  document.querySelectorAll('.message')[1].style.color='var(--color-alert)';
   
  if (password[0].value.length == 0 )
  {
    
    e.preventDefault();
    document.querySelector('.text1').textContent =' Ce champ est requis.';
  } 
  else 
  {
    // if (password[0].value.match(regex) == null) 
    // {  
    //     e.preventDefault();
    //     document.querySelector('.text1').textContent =' Doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
    // }
        password[0].style.border = '1px solid #798C73';
        document.querySelectorAll('.message')[1].textContent ="";
    
  }
})
