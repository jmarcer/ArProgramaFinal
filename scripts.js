function llenarPantallaConfirmacion(){
    console.log("llenarPantallaConfirmacion1");
   /* if (!document.getElementById("datoNombreApellido").reportValidity()) {
        console.log("desde el check nombre")
        document.getElementById("datoNombreApellido").reportValidity();
    }*/
    document.getElementById("valorNombreApellido").textContent = document.getElementById("datoNombreApellido").value;

    console.log("llenarPantallaConfirmacion2");
    //document.getElementById("datoDni").reportValidity();
    document.getElementById("valorDni").textContent = document.getElementById("datoDni").value;
    
    console.log("llenarPantallaConfirmacion3");
    document.getElementById("valorEdad").textContent = document.getElementById("datoEdad").value;
    console.log("llenarPantallaConfirmacion4");
    document.getElementById("valorTelefono").textContent = document.getElementById("datoTel").value;
    console.log("llenarPantallaConfirmacion5");
    document.getElementById("valorEmail").textContent = document.getElementById("datoMail").value;
    console.log("llenarPantallaConfirmacion6");
    document.getElementById("valorNombreMascota").textContent = document.getElementById("datoNombreMascota").value;
    console.log("llenarPantallaConfirmacion7");
    document.getElementById("valorTipoMascota").textContent = document.getElementById("datoTipoMascota").value;
    console.log("llenarPantallaConfirmacion8");
    document.getElementById("valorCum").textContent = document.getElementById("datoCum").value;
    console.log("llenarPantallaConfirmacion9");
    document.getElementById("valorFechaHora").textContent = document.getElementById("datoFechaHora").value;
}
function validacionForm1(){
    //console.log('msj onclick'); 
    //return document.querySelector('form').checkValidity();
}

function validacionForm2(){
    //console.log('msj onclick'); 
    //return document.querySelector('form').reportValidity();
}

function ValidarCamposForm(){
    $("#basic-form").valid();
}


$(document).ready(function () {
    console.log("ready");
    $("#basic-form").validate({
        rules: {
            datoNombreApellido :{
                required: true
            },

            datoDni:{
                required: true
            },

            datoEdad:{
                required: true
            },

            datoTel:{
                required: true
            },

            datoMail:{
                required: true
            },

            datoNombreMascota:{
                required: true
            },

            datoTipoMascota:{
                required: true
            },

            datoCum:{
                required: true
            },

            datoFechaHora:{
                required: true
            }


        }
    });
})

$("#basic-form").submit(function(event) {
    console.log("desde prevent default");
    event.preventDefault();
    return false;

});
/*
datoFechaHora
*/