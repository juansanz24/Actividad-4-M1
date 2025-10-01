function validarFormulario(){

 let nombre= document.getElementById("nombre").value;
 let correo= document.getElementById("correo").value;
 let edad= document.getElementById("edad").value;
 let telefono= document.getElementById("telefono").value;
 let fecha= document.getElementById("fecha").value;
 let habitacion= document.getElementById("habitacion").value;

 if (nombre === "" || correo === "" || edad === "" || telefono === "" || fecha === "" || habitacion === ""){
    document.getElementById("mensaje").innerText="Todos los campos son obligatorios";
    document.getElementById("mensaje").style.color="red";
    return false;
 } else {
    document.getElementById("mensaje").innerText="Formulario enviado correctamente";
    document.getElementById("mensaje").style.color="green";

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("edad", edad);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("fecha", fecha);
    localStorage.setItem("habitacion", habitacion);

    setTimeout(function(){
        window.location.href="resultados.html";
    }, 1500);

    return false;
 }

}