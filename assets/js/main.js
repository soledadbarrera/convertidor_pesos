var cantidad = document.getElementById('cantidad');

//seleccionar elemento del selector.

var desdeOption;   
var sw=0;
function seleccionarDesde(){
  var desde = document.getElementById('desde');

  desdeOption = desde.options[desde.selectedIndex].value;
  sw=1;
 
};

var cantConvertida;

var boton = document.getElementById('boton');
boton.addEventListener('click', calcular);

var resultado = document.getElementById('resultado');

function limpia(){
  resultado.innerHTML = "";
  sw=0;
}

function calcular(){

if (cantidad.value !==""){
 
  cantConvertida = parseInt(cantidad.value);

  if (desdeOption == "USD" || sw == 0) {
  
    resultado.innerHTML = cantConvertida * 768,60 ;
    //document.getElementById("resultado").innerHTML=Math.floor(cantConvertida * 768,60);
  
  }

  else if(desdeOption == "EUR"){
    resultado.innerHTML = cantConvertida * 913,48 ;
  }

  else if(desdeOption == "BRL"){
    resultado.innerHTML = cantConvertida * 142,06 ;
  }

  else if(desdeOption == "JPY"){
    resultado.innerHTML = cantConvertida * 7,40 ;
  }

  else if(desdeOption == "CNY"){
    resultado.innerHTML = cantConvertida * 117,28 ;
  }

  else if(desdeOption == "ARS"){
    resultado.innerHTML = cantConvertida * 9,62 ;
  }

}
else{
  alert("Debe ingresar cantidad");
}

}