
window.onload = () => {

    let role = document.querySelector(".role").dataset.role
    
    $.ajax({
        //L'URL de la requête 
        url: "calendar/ajax",

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType : "json",
    })
    //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
    /*On peut par exemple convertir cette réponse en chaine JSON et insérer*/
    .done(function(response){
        data = JSON.parse(response);
        let calendarElt = document.querySelector("#calendar")
        //On configure le calendrier suivant les options de calendar
        
        // Si le role du user connecté est "admin" alors il peut modifier les dates de missions du calendrier
        if (role == "admin") {
            let calendar = new FullCalendar.Calendar(calendarElt,{
                // Affichage de la grille des mois
                initialView: 'dayGridMonth',
                //On met la langue en français
                locale:'fr',
                timeZone: 'Europe/Paris',
                headerToolbar:{
                    start:"prev,next today",
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek'
                },
                // On affiche les dates que l'on a envoyer en JSON sur le twig
                events: data  ,
                
                // Permet de déplacer les dates de missions
                editable: true,
                // Permet de modifier les horaires vers le haut et vers le bas
                eventResizableFromStart: true
            })

            calendar.render()

            calendar.on('eventChange', (e) =>{
        
                if (role == "admin") {
                    var dialog = confirm("Cette action va entrainer un changement d'horaire pour la mission, voulez vous confirmer cette action ?");
                    if (dialog) {
                    // On séléction l'URL vers laquelle on va envoyer les données
                        let url = `/administrateur/calendar/update`
                        // On envoie les données que l'on souhaite
                        let donnees = {
                            "idDate": e.event.extendedProps.idDateTime,
                            "title": e.event.title,
                            "description": e.event.extendedProps.Description,
                            "start": e.event.start,
                            "end": e.event.end
        
                        }
                        // Création d'une requete XML pour envoyer les requêtes vers le controller 
                        let xhr = new XMLHttpRequest
                        // choix de la méthode d'envoie des données
                        xhr.open("PUT", url)
                        xhr.send(JSON.stringify(donnees))
                    }
                    else {
                        e.stopPropagation() ;
                    }             
                }
            })
        }
        else{

            let calendar = new FullCalendar.Calendar(calendarElt,{
                // Affichage de la grille des mois
                initialView: 'dayGridMonth',
                //On met la langue en français
                locale:'fr',
                timeZone: 'Europe/Paris',
                headerToolbar:{
                    start:"prev,next today",
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek'
                },
                // On affiche les dates que l'on a envoyer en JSON sur le twig
                events: data  ,
                
                // Permet de déplacer les dates de missions
                editable: false,
                // Permet de modifier les horaires vers le haut et vers le bas
                eventResizableFromStart: true
            })

            calendar.render()
        }
            
      
})

    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
  
}
