const datos=[];

const form= document.getElementById("todo-form");
form.onsubmit= (e)=>{
    e.preventDefault();
    const nombre = document.getElementById('name-label'); 
    const nombreTexto = nombre.value;
    nombre.value='';
    datos.push(nombreTexto);

    const apellido = document.getElementById('surname-label'); 
    const apellidoTexto = apellido.value;
    apellido.value='';
    datos.push(apellidoTexto);

    const email = document.getElementById('email-label'); 
    const emailTexto = email.value;
    email.value='';
    datos.push(emailTexto);

    const edad = document.getElementById('number-label'); 
    const edadTexto = edad.value;
    edad.value='';
    datos.push(edadTexto);
   
    const pais = document.getElementById('pais-label'); 
    const paisTexto = pais.value;
    pais.value='';
    datos.push(paisTexto);
    
    const experiencia = document.getElementById('experiencia'); 
    const expTexto = experiencia.value;
    experiencia.value='';
    datos.push(expTexto);

    console.log(datos);

}