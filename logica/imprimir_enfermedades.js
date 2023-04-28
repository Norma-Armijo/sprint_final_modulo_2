

  let pacientes = JSON.parse(localStorage.getItem("pacientes"));
let descarga_rut = localStorage.getItem("rut");
 
  codigo = "";

array = [];

for (let i = 0; i < pacientes.length; i++) {


  if (pacientes[i].rut == descarga_rut) {
    array = pacientes[i];
  }
}

  for (let i = 0; i < array.enfermedades.length; i++) {
    let diagnostico = array.enfermedades[i].diagnostico;

    let observaciones = array.enfermedades[i].observaciones;

      let elemento_html =
        " <div class='col-lg-3 col-md-6 col-sx-12 col-sm-10 d-flex justify-content-center my-2' >"+
      "<div class='card bg-light   w-100 my-3'>" +
        "<div class='card-header'> Diagnostico : " +
        diagnostico +
        "</div>" +
        "<div class='card-body'> Observaciones : " +
        observaciones +
        "</div>" +
        "</div></div>  <br>";

    codigo = codigo + elemento_html;
  }

  document.getElementById("contendedor_enfermedades").innerHTML = codigo;



