/* <-------------------------------------- Input type checkbox ----------------------------------------->*/
const Allcards = [].slice.call(document.querySelectorAll(".form_jobs_container"));



Allcards.map((card) =>
    {
           
        const checkbox = card.querySelectorAll(".checkbox")[0];
            
        checkbox.addEventListener("change",(e) =>
        {   
               
            const contentJob = card.querySelectorAll('.card__content')[0]
            const contentJobForm = card.querySelectorAll('.card__content')[1]
            const arrow = card.querySelectorAll('.job__arrows')[0];
            const arrowTop =  card.querySelectorAll('.arrowTop')[0];
            const arrowBot =  card.querySelectorAll('.arrowBot')[0];
            if( checkbox.checked == true)
            {
                arrow.classList.remove('hidden');  
                arrowTop.classList.remove('hidden');
                contentJob.style.display = 'contents'; 
                contentJobForm.style.display = 'contents'; 
            }
            else if( checkbox.checked == false)  
            {
                arrow.classList.add('hidden');
                arrowTop.classList.add('hidden');
                arrowBot.classList.add('hidden');
                contentJob.style.display = 'none'; 
                contentJobForm.style.display = 'none'; 
                            
            }
        
        })

        const AllCardsCont = [].slice.call(card.querySelectorAll(".job-created")); 
        console.log(AllCardsCont) ; 

        AllCardsCont.map((cardJob)=>
            {
                console.log(cardJob)
                let arrow = cardJob.querySelector('.job__arrows');
                
             

                    arrow.addEventListener('click',(e)=>
                    {
                        
                        const contentJob = cardJob.querySelector('.card__content');
                        const arrowTop =  arrow.querySelector('.arrowTop');
                        const arrowBot =  arrow.querySelector('.arrowBot');
                        if( arrowTop.classList.contains('hidden') == false)
                        {
                            contentJob.style.display = 'none';
                            arrowTop.classList.add('hidden');
                            arrowBot.classList.remove('hidden');
                        }
                        else
                        {
                            contentJob.style.display = 'contents'; 
                            arrowTop.classList.remove('hidden');
                            arrowBot.classList.add('hidden');
                        }
                    })
                })
    })
// <------------------------------------------------------Display or hidden Form  modified--------------------------------------->

const Allbuttons = document.querySelectorAll('button[type=button]');
console.log(Allbuttons)
                 
// Allbuttons.forEach(button => {
//     button.addEventListener('click',(e)=>
//     {
       
//          divCard=e.target.parentNode.parentNode.parentNode;
//          console.log(e.target);
//          divCardJob= divCard.parentNode;
//          divCardModified= divCardJob.children[1];
//          let checkboxForm= divCardModified.children[0].children[0].children[0].children[0];
//          let cardContent = divCardJob.children[1].children[0].children[1];         
//          let arrow = divCardJob.children[1].children[0].children[0].children[2];
//          checkboxForm.checked = true;
//          divCardModified.classList.toggle('hidden');
//          divCard.classList.toggle('hidden');
//          if( checkboxForm.checked)
//          {
//             cardContent.style.display= 'contents';
//             arrow.classList.remove('hidden');

//          }
//          else if(!checkboxForm.checked)
//          {
//             cardContent.style.display= 'none';
//             arrow.classList.add('hidden');
//          }



//     })
// });
const AllSubmits = document.querySelectorAll('button[type=submit]');
       
AllSubmits.forEach(Submit =>
{
    Submit.addEventListener('click',(e)=>
    {
        let submit = e.target;
        let parentDiv = submit.parentNode.parentNode.parentNode.parentNode.parentNode;
        let checkbox = parentDiv.children[0].children[0].children[0].children[0];
        checkbox.checked = true;

    })
  
});
// <------------------------------------------------------button modify for div arrow cardJobForm-------------------------------------->
const allFormJob = [].slice.call(document.querySelectorAll('.form_jobs_container'));
console.log(allFormJob);

allFormJob.map((formJob)=>
{

    buttonModify= formJob.querySelector('.button-modify');
    divArrow = formJob.querySelectorAll('.job__arrows')[1];
    console.log( divArrow);
    buttonModify.addEventListener('click',(e)=>
    {
        console.log(e.target)
    })
    // )
}
)