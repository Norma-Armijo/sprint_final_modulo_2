let arreglo = JSON.parse(localStorage.getItem("pacientes"));
let arreglo_examen_funcion_renal = [];
let descarga_rut = localStorage.getItem("rut");
 
for (let i = 0; i < arreglo.length; i++) {
  console.log(i);
  if (arreglo[i].rut == descarga_rut) {
    arreglo_examen_funcion_renal = arreglo[i].examenes[1].lista;
    console.log("RUT ENCONTRADO");
  }
}

//--------------------------------------------------------------------------

let creatinina = [];
for (let i = 0; i < arreglo_examen_funcion_renal.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_renal[i].creatinina);

  creatinina.push(arreglo_examen_funcion_renal[i].creatinina);
}
console.log(creatinina);

//--------------------------------------------------------------------------

let urea = [];
for (let i = 0; i < arreglo_examen_funcion_renal.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_renal[i].urea);

  urea.push(arreglo_examen_funcion_renal[i].urea);
}
console.log(urea);

//--------------------------------------------------------------------

let acidoUrico = [];
for (let i = 0; i < arreglo_examen_funcion_renal.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_renal[i].acidoUrico);

  acidoUrico.push(arreglo_examen_funcion_renal[i].acidoUrico);
}
console.log(acidoUrico);

console.log(arreglo[0].examenes[0].lista[0]);

let albumina = [];
for (let i = 0; i < arreglo_examen_funcion_renal.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_renal[i].albumina);

  albumina.push(arreglo_examen_funcion_renal[i].albumina);
}
console.log(albumina);

console.log(arreglo[0].examenes[0].lista[0]);

let fecha = [];
for (let i = 0; i < arreglo_examen_funcion_renal.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_renal[i].fecha);
  if (arreglo_examen_funcion_renal[i].fecha == undefined) {
    arreglo_examen_funcion_renal[i].fecha = "2023-04-15T00:00:00.000Z";
  }
  fecha.push(arreglo_examen_funcion_renal[i].fecha);
}
console.log(fecha);

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: fecha,
    datasets: [
      {
        label: "Creatinina",
        data: creatinina,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Urea",
        data: urea,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Acido Urico",
        data: acidoUrico,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Albumina",
        data: albumina,
        borderColor: "purple",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Tiempo",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Valor",
          },
        },
      ],
    },
  },
});
