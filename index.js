function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu
    var x = document.qetElementById("nav");
    x.className = "";
}

function responsiveMenu(){
    var x = document.getElementById("nav")
    if (x.className === ""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detector scrooll
window.onscroll = function(){
    efectoHabilidades()
};
 //funcion que aplica la animacion

 function efectoHabilidades(){
    var skill = document.getElementById("skill");
    var distancia_skill = window.innerHeight - skill.getBoundingClientRect().top;
    if(distancia_skill >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("react").classList.add("barra-progreso3");
        document.getElementById("bd").classList.add("barra-progreso4");
        document.getElementById("gg").classList.add("barra-progreso5");
    }
 }

 const $form = document.querySelector('#form')

 $form.addEventListener('submit', handlesubmit)

 async function handlesubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'accept': 'application/json'
        }
    })
    if (response.ok)
    this.reset()
    alert('Gracias tu mensaje a sido enviado, me contactare pronto!')
 }