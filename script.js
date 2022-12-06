let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');

form.addEventListener('submit',(e)=>{ // <-- Por que o evento também funciona? (Pesquisar)
    e.preventDefault(); // < -- Por que isso funciona? (Pesquisar)
    console.log('button clicked');
    formValidation();
});

let formValidation = () => {
    if (input.value === ""){
        msg.innerHTML = 'Failure';
    }else{
        msg.innerHTML = "";
    }
}