var cantidadEntrdas = 1;
function calcularTiempo(){
    let velocidad = parseInt(document.querySelector('.velocidad').value);
    let cant_compases = parseInt(document.querySelector('.c_compases').value);
    let cant_tiempos = parseInt(document.querySelector('.c_tiempos').value);
    let cant_pentagramas = parseInt(document.querySelector('.c_pentagramas').value);
    let cant_compases_repetidos = parseInt(document.querySelector('.c_compases_repetidos').value);
    let cant_compases_extras = parseInt(document.querySelector('.c_compases_extras').value);
    if (velocidad > 0 && cant_compases > 0 && cant_tiempos > 0 && cant_pentagramas > 0 && cant_compases_repetidos >= 0 && cant_compases_extras >= 0){
        var tiempo = 0;
        velocidad = 3600/velocidad/60;
        cant_compases *= cant_pentagramas;
        cant_compases += cant_compases_repetidos + cant_compases_extras;
        for(var i = 0; i < cant_compases;i++){
            for(var j = 0; j < cant_tiempos; j++){
                tiempo += velocidad;
            }
        }
        document.querySelector("#salida").innerHTML = "La partitura dura " + sexagecimal_lenguaje(decimal_sexagecimal(tiempo));
    }
    else{
        alert("Deben ser mayor que 0")
    }
    //document.write("La partitura dura " + sexagecimal_lenguaje(decimal_sexagecimal(tiempo)) )
    
}
function decimal_sexagecimal(segs){
    segs = parseInt(segs);
    horas = 0; mins = 0;
    while (segs > 59){
        segs -= 60;
        mins += 1;
        if (mins > 59){
            horas += 1;
            mins -= 60;
        }
    }
    out = []
    
    out.push(horas);
    out.push(mins);
    out.push(segs) 
    return out;
}

function sexagecimal_lenguaje(sexag){
    
    sexag = Array.from(sexag)
    var out = "";
    var orden = [["hora","horas"],["minuto","minutos"],["segundo","segundos"]];
   
    for (var i = 0; i < 3; i++){
        if (sexag[i] != 0){
            out += sexag[i] +  " " + (sexag[i] > 1 ? orden[i][1]: orden[i][0]) + " "
        }
    }
    return out
}

function agregarParametro(){
    var original = document.getElementsByClassName("entrada")[0];
    var copia = original.cloneNode(true);
    var destino = document.getElementById("contenedor");
    destino.appendChild(copia);
    cantidadEntrdas++;
    if (cantidadEntrdas > 1){
        document.getElementById("quitar").setAttribute("style", "display: auto");
    }
}
function quitarParametro(){
    var padre = document.getElementById("contenedor");
    var hijos = padre.lastChild;
    padre.removeChild(hijos);
    cantidadEntrdas--;
    if (cantidadEntrdas <= 1){
        document.getElementById("quitar").setAttribute("style", "display: none");
    }
}
