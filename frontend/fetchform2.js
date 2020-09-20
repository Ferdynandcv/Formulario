function traerform() {
    var contenido = document.querySelector("#contenido2");
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", true);

    headers.append("GET", "POST", "OPTIONS");

    var request = new Request("http://localhost:3000/form2");
    fetch(request, { mode: 'cors' })

        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)

            contenido.innerHTML = '';

            for (var i = 0; i < datos.length; i++) {
                i + 1


                let nombre = datos[i].nombre;
                let snombre = datos[i].snombre;
                let apellido = datos[i].apellido;
                let sapellido = datos[i].sapellido;
                let capellido = datos[i].capellido;
                let DPI = datos[i].DPI;
                let NIP = datos[i].NIP;
                let nacimiento = datos[i].nacimiento;
                let pueston = datos[i].pueston;
                let puestof = datos[i].puestof;
                let depart = datos[i].depart;
                let emailinst = datos[i].emailinst;
                let emailper = datos[i].emailper;
                let telCelu = datos[i].telCelu;
                let telCasa = datos[i].telCasa;

                contenido.innerHTML +=
                    `
      <div>
        <p>Puestos Permanentes </P>
      <br>
      <p> No.  ${i} </p>
      <p> Primer  Nombre: ${nombre} </p>
      <p> Segundo Nombre: ${snombre} </p>
      <p> Primer Apelldo: ${apellido} </p>
      <p> Segundo Apellido: ${sapellido} </p>
      <p> Apellido Casada: ${capellido} </p>
      <p> DPI: ${DPI} </p>
      <p> NIP: ${NIP} </p>
      <p> Fecha de nacimiento: ${nacimiento} </p>
      <p> puesto nominal: ${pueston} </p>
      <p> puestos funcional: ${puestof} </p>
      <p> departamento: ${depart} </p>
      <p> Email Institucional: ${emailinst} </p>
      <p>  Email Personal: ${emailper} </p>
      <p> No. telefono Celular: ${telCelu} </p>
      <p> No. telefono personal: ${telCasa} </p>
      </div>
      `
            }

        });

}          
