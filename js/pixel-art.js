var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paletaColores = document.getElementById('paleta');

var grillaPixeles = document.getElementById('grilla-pixeles');


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    document.getElementById("indicador-de-color").style.backgroundColor = colorActual;

  })
);


function recorridoPaletas(){
  for(var i = 0; i < nombreColores.length; i++){
    var divsColores = document.createElement('div');
    divsColores.style.background = nombreColores[i];
    paletaColores.append(divsColores);
    divsColores.className = "color-paleta"  
  }
}


function creacionDeGrilla(){
  for(var i = 0; i <= 1750; i++){
    var grilla = document.createElement("div");
    grillaPixeles.append(grilla);
    grilla.className = "grilla-pixeles";
  }
}


//Funcion con callback que cambia el indicador-de-color por el color que yo seleccione
document.getElementById("paleta").addEventListener("click", nuevoColor);

function nuevoColor(e){
  var colorSeleccionado = e.target.style.backgroundColor;
  cambiarIndicadorDeColor(colorSeleccionado);
}

function cambiarIndicadorDeColor(colorElegido){
document.getElementById("indicador-de-color").style.backgroundColor = colorElegido
};


//Funcion que permititra pintar la grilla del color que previamente habia seleccionado
var mouse = undefined;

grillaPixeles.addEventListener("mousedown", mouseAbajo);
grillaPixeles.addEventListener("mouseup", mouseArriba);

function mouseAbajo(){
  mouse = true;
};

function mouseArriba(){
  mouse = false;
};

  grillaPixeles.addEventListener("mousemove", pintar);
  
    function pintar(e){
      if(mouse){
      e.target.style.backgroundColor = document.getElementById("indicador-de-color").style.backgroundColor;
    };
  };

  grillaPixeles.addEventListener("mousedown", pintar);
  
    function pintar(e){
      if(mouse){
      e.target.style.backgroundColor = document.getElementById("indicador-de-color").style.backgroundColor;
    };
  };

//BORRAR TODO
$("#borrar").on("click" , function(){
  $(".grilla-pixeles").animate({"backgroundColor" : "white"}, 1000 )
});


//cargar superheroes
$("#batman").on("click", function(){
  cargarSuperheroe(batman);
});

$("#wonder").on("click", function(){
  cargarSuperheroe(wonder);
});

$("#flash").on("click", function(){
  cargarSuperheroe(flash);
});

$("#invisible").on("click", function(){
  cargarSuperheroe(invisible);
});


//Guardar pixel art

$("#guardar").on("click", function(){
  guardarPixelArt();
});


//Ejecucion de funciones

recorridoPaletas();

creacionDeGrilla();

