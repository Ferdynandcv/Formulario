function traer() {
    var contenido = document.querySelector("#contenido");
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", true);

    headers.append("GET", "POST", "OPTIONS");

    var request = new Request("http://localhost:3000/api");
    fetch(request, { mode: 'cors' })

        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)

            contenido.innerHTML = '';

            for (var i = 0; i < datos.length; i++) {
                i + 1


                let nombre = datos[i].nombre;
                let puesto = datos[i].puesto;
                let lugar = datos[i].lugar;
                let fecha = datos[i].fecha;
                let tel = datos[i].tel;

                contenido.innerHTML +=
                    `
      <div>
        <p>Puestos Temporales </P>
      <br>
      <p> No.  ${i} </p>
      <p> Nombre: ${nombre} </p>
      <p> Puesto: ${puesto} </p>
      <p> Lugar: ${lugar} </p>
      <p> Fecha: ${fecha} </p>
      <p> Telefono: ${tel} </p>
      </div>

      `
            }

        });

}          
