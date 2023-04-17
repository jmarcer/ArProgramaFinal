function llenarPantallaConfirmacion(){
    console.log("llenarPantallaConfirmacion1");
    document.getElementById("valorNombreApellido").textContent = document.getElementById("datoNombreApellido").value;
    console.log("llenarPantallaConfirmacion2");
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
    document.getElementById("valorFechaHora").textContent = new Date(Date.parse(document.getElementById("datoFechaHora").value)).toLocaleString();
}

function ValidarCamposForm(){
    $("#basic-form").valid();
}


//Codigo Api/Ajax

const HTMLResponse = document.querySelector("#app");
const templateUL = document.getElementsByClassName(`ulNos`);

console.log("antes de la llamada")
$.ajax({ method: "GET", url: "http://jsonplaceholder.typicode.com/users" })
    .done(function (users) {
        //Mostrar por consola la respuesta de la API
        console.log(users)

        //Mostrar respuesta de API en un componente HTML
        //document.getElementById("response").innerHTML = users;

        //Mostrar respuesta de API en un componente HTML recorriendo cada usuario
        for(let i=0; i<4;i++){
            let user = users[i];
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${user.name}`)
            );
            let elem2 = document.createElement("li");
            elem2.appendChild(
                document.createTextNode(`${user.email.toLowerCase()}`)
            );
            templateUL[i].appendChild(elem);
            templateUL[i].appendChild(elem2);


        }
        
        /*users.forEach((users) => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`Nombre: ${users.name}, Email: ${users.email}`)
            );
            templateUL.appendChild(elem);
        });
        HTMLResponse.appendChild(templateUL);*/

    }
    )
