/* <-------------------------------------- spaced phone number after 2 numeros ----------------------------------------->*/
let compteurAdmin = 2;
let compteurManager = 2;

document
  .getElementById("hotel_setting_general_admin_phoneNumber")
  .addEventListener("keypress", function () {
    txt = this.value;
    if (
      (compteurAdmin - txt.length) === 0
    ){
      this.value = this.value + " ";
      compteurAdmin = txt.length+ 3;
    }
   
  });

document
  .getElementById("hotel_setting_general_managerPhoneNumber")
  .addEventListener("keypress", function () {
    txt = this.value;
    if (
      (compteurManager - txt.length) === 0
    ){
      this.value = this.value + " ";
      compteurManager = txt.length+ 3;
    }
   
  });
/* <-------------------------------------- mouseOver input disabled ----------------------------------------->*/

/* <--------------------------------------check Admin Email ----------------------------------------->*/

//création du regex email
const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
//récupération de l'input email
const email = document.getElementById("hotel_setting_general_admin_email");
//récupération du bouton submit 
const submit = document.querySelector("button[type=submit]");
// récupération des éléments avec la  classe .message 
const messages =  document.querySelectorAll('.message');


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
  document.querySelectorAll('.exclamation')[0].textContent ='error';
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
    document.querySelectorAll('.text')[0].textContent =' Ce champ est requis.';
  } 
  else
  {
    // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
    if (email.value.match(regexEmail) == null) 
    {  
        e.preventDefault();
        messages[0].classList.remove('hidden');
        document.querySelectorAll('.text')[0].textContent =" Email non valide";
    }
    else 
    {
      messages[0].classList.add('hidden');
      email.style.border = '1px solid #798C73';
      messages[0].textContent ="";
    }
  }
}) 
/* <--------------------------------------check PhoneNumber ----------------------------------------->*/

const regexAdminPhoneNumber = /^(0)[1-9]( [0-9]{2}){4}$/ ;
const adminPhone = document.getElementById("hotel_setting_general_admin_phoneNumber");

// on écoute l'événement au clic du bouton submit 
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //création d'un paragraphe 
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
  // modification du border
  adminPhone.style.border = '1px solid #C34537';
  adminPhone.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[1].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input égal à zéro 
  if (adminPhone.value.length == 0 )
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
    // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
    if (adminPhone.value.match(regexAdminPhoneNumber) == null) 
    {  
        e.preventDefault();
        messages[1].classList.remove('hidden');
        messages[1].querySelector('.text').textContent =" Téléphone non valide";
    }
    else 
    {
      messages[1].classList.add('hidden');
      adminPhone.style.border = '1px solid #798C73';
      messages[1].textContent ="";
    }
  }
}) 
/* <--------------------------------------Contact Firstname ----------------------------------------->*/
 
const regexManagerFirstname = /([\wáâàãçéêíóôõúüÁÂÀÃÇÉÊÍÓÔÕÚÜ]+\-?\'?[a-zA-Z]+)/ ;
const managerFirstname = document.getElementById("hotel_setting_general_managerFirstName");


// on écoute l'événement au clic du bouton submit 
submit.addEventListener("click",(e)=>
{
  //création d'une balise span 
  const icone= document.createElement('span');
   //création d'un paragraphe 
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
   // modification du border
   managerFirstname.style.border = '1px solid #C34537';
   managerFirstname.style.borderRadius = '2px';
   //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
   messages[2].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input égal à zéro 
  if (managerFirstname.value.length == 0 )
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
    // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
    if (managerFirstname.value.match(regexManagerFirstname) == null) 
    {  
        e.preventDefault();
        messages[2].classList.remove('hidden');
        messages[2].querySelector('.text').textContent =" Prénom non valide";
    }
    else 
    {
      messages[2].classList.add('hidden');
      managerFirstname.style.border = '1px solid #798C73';
      messages[2].textContent ="";
    }
  }
}) 
/* <--------------------------------------Manager name ----------------------------------------->*/
const regexManagerName = /([\wáâàãçéêíóôõúüÁÂÀÃÇÉÊÍÓÔÕÚÜ]+\-?\'?[a-zA-Z]+)/;
const managerName = document.getElementById("hotel_setting_general_managerName");

// on écoute l'événement au clic du bouton submit 
submit.addEventListener("click",(e)=>
{ 
  //création d'une balise span 
  const icone= document.createElement('span');
   //création d'un paragraphe 
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
  // modification du border
  managerName.style.border = '1px solid #C34537';
  managerName.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[3].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input égal à zéro 
  if (managerName.value.length == 0 )
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
    // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
    if (managerName.value.match(regexManagerName) == null) 
    {  
        e.preventDefault();
        messages[3].classList.remove('hidden');
        messages[3].querySelector('.text').textContent =" Nom non valide";
    }
    else 
    {
      messages[3].classList.add('hidden');
      managerName.style.border = '1px solid #798C73';
      messages[3].textContent ="";
    }
  }
}) 

/* <-------------------------------------- Degree ----------------------------------------->*/
// const regexDegree = /([\wáâàãçéêíóôõúüÁÂÀÃÇÉÊÍÓÔÕÚÜ]+\-?\'?\ [a-zA-Z]+)/;
// const degree = document.getElementById("hotel_setting_general_degree");

// // on écoute l'événement au clic du bouton submit 
// submit.addEventListener("click",(e)=>
// {
//   //création d'une balise span 
//   const icone= document.createElement('span');
//    //création d'un paragraphe 
//   const text= document.createElement('p');
//   //ajout de classe sur la variable icone
//   icone.setAttribute('class','material-symbols-sharp exclamation'); 
//    //ajout de classe sur la variable  text
//   text.setAttribute('class','text'); 
//    //insertion  de la balise span dans le parent   message 
//  messages[4].appendChild(icone);
//   //insertion à la dernière place   du  paragraphe  dans le parent   message    
//   messages[4].appendChild(text);
//   // ajout de text dans la balise span 
//   messages[4].querySelector('.exclamation').textContent ='error';
//   // modification du border
//   degree.style.border = '1px solid #C34537';
//   degree.style.borderRadius = '2px';
//   //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
//   messages[4].style.color='var(--color-alert)'
//   // si la  longueur de  la valeur de l'input égal à zéro 
//   if (degree.value.length == 0 )
//   {
//     // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
//     //suite   à l'envoie du formulaire 
//     e.preventDefault();
//     messages[4].classList.remove('hidden');
//     // ajout de  texte dans le paragraphe 
//     messages[4].querySelector('.text').textContent =' Ce champ est requis.';
//   } 
//   else
//   {
//     // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
//     if (degree.value.match(regexDegree) == null) 
//     {  
//         e.preventDefault();
//         messages[4].classList.remove('hidden');
//         messages[4].querySelector('.text').textContent =" Poste non valide";
//     }
//     else 
//     {
//       messages[4].classList.add('hidden');
//       degree.style.border = '1px solid #798C73';
//       messages[4].textContent ="";
//     }
//   }
// }) 


/* <--------------------------------------Contact ManagerPhoneNumber ----------------------------------------->*/
const regexManagerPhoneNumber = /^(0)[1-9]( [0-9]{2}){4}$/ ;
const ManagerPhone = document.getElementById("hotel_setting_general_managerPhoneNumber");

// on écoute l'événement au clic du bouton submit 
submit.addEventListener("click",(e)=>
{
  messages[5].classList.remove('hidden')
  //création d'une balise span 
  const icone= document.createElement('span');
   //création d'un paragraphe 
  const text= document.createElement('p');
  //ajout de classe sur la variable icone
  icone.setAttribute('class','material-symbols-sharp exclamation'); 
   //ajout de classe sur la variable  text
  text.setAttribute('class','text'); 
   //insertion  de la balise span dans le parent   message 
   messages[5].appendChild(icone);
  //insertion à la dernière place   du  paragraphe  dans le parent   message    
   messages[5].appendChild(text);
  // ajout de text dans la balise span 
   messages[5].querySelector('.exclamation').textContent ='error';
  // modification du border
  ManagerPhone.style.border = '1px solid #C34537';
  ManagerPhone.style.borderRadius = '2px';
  //  le  premier élément  ayant la classe   message  appliqué  la   variable de couleur
  messages[5].style.color='var(--color-alert)'
  // si la  longueur de  la valeur de l'input égal à zéro 
  if (ManagerPhone.value.length == 0 )
  {
    // fonction qui permet  d'interrompre  le chargement de la page(comportement par defaut du navigateur) 
    //suite   à l'envoie du formulaire 
    e.preventDefault();
    messages[5].classList.remove('hidden');
    // ajout de  texte dans le paragraphe 
    messages[5].querySelector('.text').textContent =' Ce champ est requis.';
  } 
  else
  {
    // vérifie si   la  valeur de l 'input  correspond aux critéres du regex 
    if (ManagerPhone.value.match(regexManagerPhoneNumber) == null) 
    {  
        e.preventDefault();
        messages[5].classList.remove('hidden');
        messages[5].querySelector('.text').textContent ="Téléphone invalide";
    }
    else 
    {
      messages[5].classList.add('hidden');
      ManagerPhone.style.border = '1px solid #798C73';
      messages[5].textContent ="";
    }
  }
}) 