
window.onload = function () {

  // Récupération de tout les checkbox pour choisir l'heure personnalisé
  let Allcheckbox = document.querySelectorAll('.check');
  // Récupération de div de selection des heures
  let list = document.getElementById("selectHours");
  // déclaration d'un tableau vide
  let selectList = [];
  // Récupération du boutton de validation de mission
  let btn = document.querySelector(".buttonHide");

  // Si on récupère une liste 
  if (list) {
    // On récupère toutes les options de la liste personnalisé
    for (var i = 0; i < list.options.length; i++) {
      selectList.push(list.options[i]);
    }
  }

  // // Permet de cacher le bouton de création de mission lorsque que l'on a cliquer dessus pour éviter les créations multiples de mission
  if (btn) {
    btn.addEventListener("click", () => {
      btn.style.display = "none";
    });
  }


  // lorsque l'on a cliqué sur la checkbox alors la fonction se déclenche
  Allcheckbox.forEach(checkbox => {   // On check si l'élément sur lequel on clique contient la classe "check"
    if (checkbox.classList.contains('check') == true) {
      // sur chaque changement d'état de la checkbox
      checkbox.addEventListener('change', (e) => {

        //On verifié la valeur de la checkbox
        if (checkbox.value == "no") {
          var customizableHours = e.target.parentNode.childNodes[1]
          // On récupère la date du jour de la mission que l'on veut crée
          let date = e.target.parentNode.childNodes[1].childNodes[1].innerText
          // On récupère le nom de l'input ou on entre la mission
          let name = e.target.parentNode.childNodes[1].childNodes[3].name
          // on récupère l'id du name de l'input
          let id = name.substr(-1, 1)
          //On remplace le select option de notre horaire personnalisé pour mettre un input de type "time"
          // afin de choisir manuellement son horaire
          customizableHours.innerHTML = `
            <label for="date">${date}</label>
            <input type="time" id="timeStart{{loop.index}}" name="timeStart${id}"  required>
            <label for="date">${date}</label>
            <input type="time" id="timeEnd{{loop.index}}" name="timeEnd${id}" required>
            `
          checkbox.value = "yes"

        } else {
          var customizableHours = e.target.parentNode.childNodes[1]
          // Si on a une horaire normal et que l'on souhaite repasser en horaire personnalisé
          // On récupère la date du jour de la mission que l'on veut crée
          let date = e.target.parentNode.childNodes[1].childNodes[1].innerText
          // On récupère le nom de l'input ou on entre la mission
          let name = e.target.parentNode.childNodes[1].childNodes[3].name
          let id = name.substr(-1, 1)
          // on récupère l'id du name de l'input
          customizableHours.innerHTML = `
               <label for="date">${date}</label>
               <select name="hours${id}"></select>
               `
          // Pour chaque horaire personnalisé que l'hotel possède on va l'afficher dans le twig dans une balise 
          // Select 
          for (var i = 0; i < list.options.length; i++) {
            let son = `<option value= ${selectList[i].value}>${selectList[i].innerText} </option>`
            // Permet d'inserer une balise option avant la fin de fermeture de la balise select
            e.target.parentNode.childNodes[1].childNodes[3].insertAdjacentHTML('beforeend', son)
          }
          checkbox.value = "no"

        }

      })

    }

  })

}

