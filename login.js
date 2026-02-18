const outbtn = document.querySelector(".logInButton"); 
const inbtn = document.querySelector(".loginformbutton");
const form = document.querySelector(".loginform");

outbtn.addEventListener('click', (e) => { 
    form.classList.toggle('show');
    inbtn.addEventListener('click', (e) => {
        console.log("Log in button clicked!")
    })
});
