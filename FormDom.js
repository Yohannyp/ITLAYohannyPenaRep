// -----------------
// Script Validacion
// -----------------

// Variables

const button01 = document.getElementById("button01")

// Submitt

const formaction = () =>{
    const ancho = document.getElementById("ancho")
    const altura = document.getElementById("altura")
    const mensaje = document.getElementById("mensaje")

    const figura = document.getElementById("figura")
    
    console.log(ancho.value, altura.value, mensaje.value)
 
    figura.style.width = ancho.value;
    figura.style.height = altura.value;
    figura.textContent = mensaje.value;
    
}

// ejecuta
button01.addEventListener('click', formaction)




// Funciones


  

