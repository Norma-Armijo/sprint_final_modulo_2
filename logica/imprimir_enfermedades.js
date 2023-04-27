
  alert("entre");

  let pacientes = JSON.parse(localStorage.getItem("pacientes"));

  codigo = "";

  for (let i = 0; i < pacientes[4].enfermedades.length; i++) {
    let diagnostico = pacientes[4].enfermedades[i].diagnostico;

    let observaciones = pacientes[4].enfermedades[i].observaciones;

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



