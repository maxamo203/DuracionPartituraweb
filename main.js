
var cantidadEntrdas = 1;
function calcularTiempo(){
    'use strict'
    let long = document.getElementsByClassName('velocidad').length;
    
    var tiempo = 0;
    for(var i = 0;i < long; i++){
        
        var velocidad = parseFloat(document.getElementsByClassName('velocidad')[i].value);
        var cant_compases = parseFloat(document.getElementsByClassName('c_compases')[i].value);
        var cant_tiempos = parseFloat(document.getElementsByClassName('c_tiempos')[i].value);
        var cant_pentagramas = parseFloat(document.getElementsByClassName('c_pentagramas')[i].value);
        var cant_compases_repetidos =parseFloat(document.getElementsByClassName('c_compases_repetidos')[i].value);
        var cant_compases_extras = parseFloat(document.getElementsByClassName('c_compases_extras')[i].value);
        if (velocidad > 1 || cant_compases > 1 )/*etc*/{
            
            velocidad = 60/velocidad;
            cant_compases = cant_compases * cant_pentagramas;
            cant_compases += cant_compases_repetidos + cant_compases_extras;

            for(var a = 0; a < cant_compases;a++){
                for(var b = 0; b < cant_tiempos; b++){
                    tiempo += velocidad;
                }
            }
            document.querySelector("#salida").innerHTML = "La partitura dura " + sexagecimal_lenguaje(decimal_sexagecimal(tiempo));
        }
        else{
            alert("Deben ser mayor que 0");
        } 
    }
     
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
    var velocidad = destino.getElementsByClassName("velocidad")[destino.getElementsByClassName("velocidad").length - 1].value = "";
    var compases = destino.getElementsByClassName("c_compases")[destino.getElementsByClassName("c_compases").length - 1].value = "";
    var tiempos = destino.getElementsByClassName("c_tiempos")[destino.getElementsByClassName("c_tiempos").length - 1].value = "";
    var pentagramas = destino.getElementsByClassName("c_pentagramas")[destino.getElementsByClassName("c_pentagramas").length - 1].value = 1;
    var repetidos = destino.getElementsByClassName("c_compases_repetidos")[destino.getElementsByClassName("c_compases_repetidos").length - 1].value = 0;
    var extras = destino.getElementsByClassName("c_compases_extras")[destino.getElementsByClassName("c_compases_extras").length - 1].value = 0;

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
