let arreglo = JSON.parse(localStorage.getItem("pacientes"));
let arreglo_examen_funcion_pulmonar = [];

for (let i = 0; i < arreglo.length; i++) {
  console.log(i);
  if (arreglo[i].rut == "16") {
    arreglo_examen_funcion_pulmonar = arreglo[i].examenes[2].lista;
    console.log("RUT ENCONTRADO");
  }
}

//--------------------------------------------------------------------------

let capacidadVital = [];
for (let i = 0; i < arreglo_examen_funcion_pulmonar.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_pulmonar[i].capacidadVital);

  capacidadVital.push(arreglo_examen_funcion_pulmonar[i].capacidadVital);
}
console.log(capacidadVital);

//--------------------------------------------------------------------------

let volumenCorriente = [];
for (let i = 0; i < arreglo_examen_funcion_pulmonar.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_pulmonar[i].volumenCorriente);

  volumenCorriente.push(arreglo_examen_funcion_pulmonar[i].volumenCorriente);
}
console.log(volumenCorriente);

//--------------------------------------------------------------------

let volumenResidual = [];
for (let i = 0; i < arreglo_examen_funcion_pulmonar.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_pulmonar[i].volumenResidual);

  volumenResidual.push(arreglo_examen_funcion_pulmonar[i].volumenResidual);
}
console.log(volumenResidual);

console.log(arreglo[0].examenes[0].lista[0]);

let flujoEsencial = [];
for (let i = 0; i < arreglo_examen_funcion_pulmonar.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_pulmonar[i].flujoEsencial);

  flujoEsencial.push(arreglo_examen_funcion_pulmonar[i].flujoEsencial);
}
console.log(flujoEsencial);

console.log(arreglo[0].examenes[0].lista[0]);

let fecha = [];
for (let i = 0; i < arreglo_examen_funcion_pulmonar.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_funcion_pulmonar[i].fecha);
  if (arreglo_examen_funcion_pulmonar[i].fecha == undefined) {
    arreglo_examen_funcion_pulmonar[i].fecha = "2023-04-15T00:00:00.000Z";
  }
  fecha.push(arreglo_examen_funcion_pulmonar[i].fecha);
}
console.log(fecha);

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: fecha,
    datasets: [
      {
        label: "capacidadVital",
        data: capacidadVital,
        borderColor: "red",
        fill: false,
      },
      {
        label: "volumenCorriente",
        data: volumenCorriente,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Volumen Residual",
        data: volumenResidual,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Flujo Escencial",
        data: flujoEsencial,
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
