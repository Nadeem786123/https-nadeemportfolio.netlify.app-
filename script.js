var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabName){

    // to hide the underline and content of the tab
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    // .....to display the color on tab, edu, skill and exp
    event.currentTarget.classList.add("active-link")
    // to disp th coneten in ntab ex if we click on educ it will send to tabname and it will search by document.getelement by
    document.getElementById(tabName).classList.add("active-tab")


}
var sidemenu=document.getElementById("sidemenu")
function openmenu(){
   // for visibility
   sidemenu.style.right="0"
}
function closemenu(){
   sidemenu.style.right="-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzSQS4RZJvXkAdFsJxLr_0Whe9xZCDOkoG18DgfjdNntUXCKuOkFSLEB_z8rSctU14O/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   console.log('Success!', response)
    .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
            form.reset()
        },5000)
    } )
    .catch(error => console.error('Error!', error.message))
    
})

