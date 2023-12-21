'use strict'

function Colegio (nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = Number(prompt("¿Cuál es su promedio?"));
    this.validarPromedio = function(){
        if(this.promedio >= 70){
            return "Aprobado";
        }else{
            return "Reprobado";
        }
    }
    this.obtenerUsuario = function(){
        if(this.correo = correo){
            return correo.slice(0, correo.indexOf("@"));
        }
    }
}

let estudianteUno = new Colegio ("David", "dacorrea@sudamericano.edu.ec");

alert(`${estudianteUno.validarPromedio()}`);
alert(`${estudianteUno.obtenerUsuario()}`);
