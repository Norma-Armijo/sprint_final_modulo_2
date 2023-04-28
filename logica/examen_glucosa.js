let arreglo = JSON.parse(localStorage.getItem("pacientes"));
let arreglo_examen_de_sangre = [];
let descarga_rut = localStorage.getItem("rut");
for (let i = 0; i < arreglo.length; i++) {
  console.log(i);
  if (arreglo[i].rut == descarga_rut) {
    arreglo_examen_de_sangre = arreglo[i].examenes[3].lista;
    console.log("RUT ENCONTRADO");
  }
}

let glucosaEnAyunas = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].glucosaEnAyunas);

  glucosaEnAyunas.push(arreglo_examen_de_sangre[i].glucosaEnAyunas);
}
console.log(glucosaEnAyunas);

let glucosaPostPrandial = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].glucosaPostPrandial);

  glucosaPostPrandial.push(arreglo_examen_de_sangre[i].glucosaPostPrandial);
}
console.log(glucosaPostPrandial);

let hemoglobinaGlicosilada = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].hemoglobinaGlicosilada);

  hemoglobinaGlicosilada.push(
    arreglo_examen_de_sangre[i].hemoglobinaGlicosilada
  );
}
console.log(hemoglobinaGlicosilada);

let toleranciaALaGlucosa = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].toleranciaALaGlucosa);

  toleranciaALaGlucosa.push(arreglo_examen_de_sangre[i].toleranciaALaGlucosa);
}
console.log(toleranciaALaGlucosa);

console.log(arreglo[0].examenes[0].lista[0]);

let fecha = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].fecha);
  if (arreglo_examen_de_sangre[i].fecha == undefined) {
    arreglo_examen_de_sangre[i].fecha = "2023-04-15T00:00:00.000Z";
  }
  fecha.push(arreglo_examen_de_sangre[i].fecha);
}
console.log(fecha);

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: fecha,
    datasets: [
      {
        label: "Glucosa Post Prandial",
        data: glucosaPostPrandial,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Hemoglobina Glicosilada",
        data: hemoglobinaGlicosilada,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Glucosa en ayunas",
        data: glucosaEnAyunas,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Tolerancia a la glucosa",
        data: toleranciaALaGlucosa,
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
