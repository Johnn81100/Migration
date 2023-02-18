
const  AllFormsCreated = [].slice.call(document.querySelectorAll('.form_job-created'));
const Allforms = [].slice.call(document.querySelectorAll('.form_job'));

Allforms.map((form)=> 
{      
    form.addEventListener('submit',(e)=>        
    {
            e.preventDefault(); 
            const jobCard = e.target.parentNode.parentNode.children[0] ; 
            const jobCarForm =e.target.parentNode;                                          
            const containerButton = e.target.children[1].children[2];
            const id = containerButton.dataset.id; 
            const DivCheckboxs = e.target.children[1].children[1]; 
            //! pour la fonction UpdateCheckbox  il faut changer  la variable checkbox 
            const checkboxs = DivCheckboxs.querySelectorAll('input[type=checkbox]:checked');
            const checkboxsFalse = DivCheckboxs.querySelectorAll('input[type=checkbox]');
            // const jobContainer = jobForm.querySelector('.job_container');      
            postData(form,id, checkboxs);
            ChangeCheckbox( checkboxs);
            jobCard.classList.remove('hidden');
            jobCarForm.classList.add('hidden');                        
    }) 
})

// recuperation des données du formulaire métiers 
function postData(form,id, checkboxs)
{
    const url = "/hotel/settings/job/requete"; 
    const formdata = new FormData(form);
    formdata.append('id', id);
    const myInit = { 
                      method: 'POST',
                      body: formdata,                               
                   };
    fetch(url,myInit)
    .then((response)=>        
    {
        if(!response.ok)
        {
            throw console.log(response.status);
        }
        
        return response.json();
    })
    .then((donnees) =>
    {        
        NewCheckoxsChecked= donnees[0][0];
        UpdateCheckbox(checkboxsFalse, checkboxs, NewCheckoxsChecked);
    })
}
// reset de l affichage des checkboxs checked
function ChangeCheckbox(divCheckboxs)
{
    divCheckboxs.forEach(checkbox=>
        {
            
              checkbox.checked = false;
        })
}
// ajout des checkboxs ajoutés  
function UpdateCheckbox( checkboxsFalse, NewCheckoxsChecked)
{
    checkboxsFalse.forEach(checkbox=>
        {
            NewCheckoxsChecked.forEach(NewCheckoxChecked=>
            {
                if(checkbox.value == NewCheckoxChecked )
                {
                    checkbox.checked = true;
                }
              
            })
            
        })
}