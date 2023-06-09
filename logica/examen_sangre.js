let arreglo = JSON.parse(localStorage.getItem("pacientes"));
let arreglo_examen_de_sangre = [];
let descarga_rut = localStorage.getItem("rut");
 
for (let i = 0; i < arreglo.length; i++) {
  console.log(i);
  if (arreglo[i].rut == descarga_rut) {
    arreglo_examen_de_sangre = arreglo[i].examenes[0].lista;
    console.log("RUT ENCONTRADO");
  }
}

console.log(arreglo[0].examenes[0].lista[0]);

let hemoglobina = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].hemoglobina);

  hemoglobina.push(arreglo_examen_de_sangre[i].hemoglobina);
}
console.log(hemoglobina);

console.log(arreglo[0].examenes[0].lista[0]);

let globulosBlancos = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].globulosBlancos);

  globulosBlancos.push(arreglo_examen_de_sangre[i].globulosBlancos);
}
console.log(globulosBlancos);

console.log(arreglo[0].examenes[0].lista[0]);

let globulosRojos = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].globulosRojos);

  globulosRojos.push(arreglo_examen_de_sangre[i].globulosRojos);
}
console.log(globulosRojos);

console.log(arreglo[0].examenes[0].lista[0]);

let plaquetas = [];
for (let i = 0; i < arreglo_examen_de_sangre.length; i++) {
  console.log("----------------------");
  console.log(arreglo_examen_de_sangre[i].plaquetas);

  plaquetas.push(arreglo_examen_de_sangre[i].plaquetas);
}
console.log(plaquetas);

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
        label: "Globulos Blancos",
        data: globulosBlancos,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Globulos Rojos",
        data: globulosRojos,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Hemoglobina",
        data: hemoglobina,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Plaquetas",
        data: plaquetas,
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
