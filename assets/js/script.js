function myFunction() {
    alert("El correo ha sido enviadors");
  }
 
  function cambiarColor(idElemento) {
    var elemento = document.getElementById(idElemento);
    var colorActual = elemento.style.color;
    var nuevoColor = '';

    
    do {
      nuevoColor = getRandomColor();
    } while (nuevoColor === colorActual); 

    elemento.style.color = nuevoColor;
  }

  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }