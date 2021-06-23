// -----------------
// Script Validacion
// -----------------

// Variables

var x, text;
var y, text;

// Funciones

function validadiametro() 
{
  x = document.getElementById("diametro").value; 
    
  // Valida diametro
  
  if (x > 0.8 && x <= 1.4) 
  {
    alert("La Rueda es para Vehiculo Mediano"); 
  } 
  else if (x > 1.4)
  {
    alert("La Rueda es para Vehiculo Grande");
  } 
  else
  {
    alert("La Rueda es para Vehiculo Pequeño");
  }
 
}

function validagrosor() 
{
  x = document.getElementById("diametro").value;
  y = document.getElementById("grosor").value;

  // Valida Diametro y Grosor
  
  if ((x > 1.4 && y < 0.4) || ((x > 0.8 && x <= 1.4) && y < 0.25))
  {
    alert("El Grosor para esta Rueda es Inferior al Recomendado"); 
  } 
  
}
