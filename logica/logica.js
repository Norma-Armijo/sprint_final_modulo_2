

//Comprobar Login
function comprobar() {
  let x = document.getElementById("usuario");
  let y = document.getElementById("password");
  if (x.value === y.value) {
    alert("Los datos ingresados son identicos");
   /*
    var url = "productos.html";

    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click(); */

      window.open("pagina_privada.html");
  } else {
    alert("Los datos ingresados no son idénticos");
  }
  //alert("FUNCIONO");
}

//Modal
$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


//REGISTRAR PACIENTE

function ingresar() {
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;
  let rut = document.getElementById("rut").value;
  let anio_de_nacimiento = document.getElementById("anio_de_nacimiento").value;
  let tipo_de_sangre = document.getElementById("tipo_de_sangre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let contrasena = document.getElementById("contrasena").value;

  let persistencia = new Persistencia();
  let paciente = new Paciente(
    nombres,
    apellidos,
    edad,
    rut,
    anio_de_nacimiento,
    tipo_de_sangre,
    email,
    telefono,
    direccion,
    contrasena
  );
  persistencia.agregar_paciente(paciente);
}

function pariente() {
  alert("entrado");
  let rutPaciente = document.getElementById("rut_paciente").value;
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let rutPariente = document.getElementById("rut").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let contrasena = document.getElementById("contrasena").value;

  let persistencia = new Persistencia();
  let pariente = new Pariente(
    nombres,
    apellidos,
    rutPariente,
    email,
    telefono,
    direccion,
    contrasena
  );

  alert(pariente);
  persistencia.agregar_pariente(rutPaciente, pariente);
}

function btn_ingresar_paciente() {
  // let nombres = document.getElementById("nombres").value;
  //let apellidos = document.getElementById("apellidos").value;
  //let edad = document.getElementById("edad").value;
  /*  let fecha_nacimiento = document.getElementById("fecha-nacimento").value;
  let rut = document.getElementById("").value;
  let tipo_de_sangre = document.getElementById("").value;

  let direccion = document.getElementById("").value;
  let telefono = document.getElementById("").value;
  let email = document.getElementById("").value;

*/

  let persistencia = new Persistencia();

  let paciente = new Paciente(
    1,
    "nombre",
    12,
    12,
    "12.233.233-7",
    "21/02/2023",
    "0",
    "l@l.cl",
    445454545,
    "direccion"
  );

  console.log(paciente);
  persistencia.agregar_paciente(paciente);
  /*
    
  */
}
function agregar_examen() {
  let persistencia = new Persistencia();
  let examen = new ExamenDeGlucosa(2, 2, 2, 2);
  persistencia.agregar_examen("12.233.233-7", "EXAMEN-DE-GLUCOSA", examen);
}

function agregar_pariente_rut() {
  let persistencia = new Persistencia();

  let pariente = new Pariente(
    "FEderico Kabul",
    "9.555.555-7",
    "kabul@kabul.com",
    "936939434",
    "pasaje la cruz | Calera"
  );

  persistencia.agregar_pariente("12.233.233-7", pariente);
}

function examen_glucosa() {
  alert("entre a glucosa");
  let rut_paciente = document.getElementById("rut_paciente").value;


  let glucosaEnAyunasInput = document.getElementById("glucosaEnAyunas").value;
  let glucosaPostPrandialInput = document.getElementById("glucosaPostPrandial").value;
  let hemoglobinaGlicosiladaInput = document.getElementById("hemoglobinaGlicosilada").value;
  let toleranciaALaGlucosaInput = document.getElementById("toleranciaALaGlucosa").value;
  let fecha = document.getElementById("fecha_examen_glucosa").value;
  let fecha_date = new Date(fecha);


  let persistencia = new Persistencia();
  let examen = new ExamenDeGlucosa(
    glucosaEnAyunasInput,
    glucosaPostPrandialInput,
    hemoglobinaGlicosiladaInput,
    toleranciaALaGlucosaInput,
    fecha_date
  );
  console.log(examen);
  persistencia.agregar_examen(rut_paciente, "EXAMEN-DE-GLUCOSA", examen);
}


/*

function imprimir_grafico_glucosa() {

  alert("entre");

  let datos = [];
  let persistencia = new Persistencia();

  let pacientes = persistencia.descargar_arreglo_localstorage();
  alert(pacientes);
  

  let rut_paciente = document.getElementById("rut_paciente_e").value;
  alert(rut_paciente);
  alert(pacientes.length);
   for (let i = 0; i < pacientes.length; i++) {
     alert("i: " + i);
     alert("PACIENTES :" + pacientes[i].rut);
     alert("RUT INGRESADO : " + rut_paciente);

     if (pacientes[i].rut == rut_paciente) {
       alert("RUT COINCIDE");

       for (let j = 0; j < pacientes[i].examenes.length; j++) {
         alert("j: " + j);
         alert("a : " + pacientes[i].examenes[j].tipo);
        

         if (pacientes[i].examenes[j].tipo == "EXAMEN-DE-GLUCOSA") {
           alert("EXAMEN COINCIDE");
            datos = pacientes[i].examenes[j].lista;















           alert("stop");
         }
       }
     }
  }
  
  const ctx = document.getElementById("grafico").getContext("2d");

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: datos.map((item) => item.fecha),
      datasets: [
        {
          label: "Ventas",
          data: datos.map((item) => item.glucosaEnAyunasInput),
          backgroundColor: "blue",
        },
        {
          label: "Gastos",
          data: datos.map((item) => item.glucosaPostPrandial),
          backgroundColor: "red",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });


}

*/

//******************************************************************************* */
//******************************************************************************* */
//******************************************************************************* */
//******************************************************************************* */
//CLASES

//CLASE PACIENTE
class Paciente {
  constructor(
    nombres,
    apellidos,
    edad,
    rut,

    anioNacimiento,
    tipo_de_sangre,
    email,
    telefono,
    direccion,
    contrasena
  ) {
    //DATOS PERSONALES

    this.nombres = nombres;
    this.apellidos = apellidos;
    this.edad = edad;
    this.anioNacimiento = anioNacimiento;
    this.rut = rut;
    this.contrasena = contrasena;
    this.tipo_de_sangre = tipo_de_sangre;
    //DATOS DE CONTACTO
    this.email = email;
    this.telefono = telefono;
    this.direccion = direccion;
    //ARREGLOS
    this.enfermedades = [];
    this.examenes = [
      {
        id: "1",
        tipo: "EXAMEN-DE-SANGRE",
        lista: [],
      },
      {
        id: "2",
        tipo: "PRUEBAS-FUNCION-RENAL",
        lista: [],
      },
      {
        id: "3",
        tipo: "PRUEBAS-FUNCION-PULMONAR",
        lista: [],
      },
      {
        id: "4",
        tipo: "EXAMEN-DE-GLUCOSA",
        lista: [],
      },
    ];
    this.parientes = [];
  }
}

//CLASE
class Pariente {
  constructor(nombres, apellidos, rut, email, telefono, direccion, contrasena) {
    //DATOS PERSONALES
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.rut = rut;
    //DATOS DE CONTACTO
    this.email = email;
    this.telefono = telefono;
    this.direccion = direccion;
    //ARREGLOS
    this.contrasena = contrasena;
  }
}

// PERSISTENCIA DE DATOS

class Persistencia {
  constructor() {
    this.compraprobar_si_es_null();
  }

  compraprobar_si_es_null() {
    let descargar_arreglo = JSON.parse(localStorage.getItem("pacientes"));
    if (descargar_arreglo == null || descargar_arreglo == undefined) {
      let arreglo_vacio = [];
      localStorage.setItem("pacientes", JSON.stringify(arreglo_vacio));
    }
  }

  descargar_arreglo_localstorage() {
    console.log("ENTRE A DESCARGAR ARREGLO LOCAL STORAGE");
    let arreglo_localstorage = JSON.parse(localStorage.getItem("pacientes"));
    console.log(arreglo_localstorage);
    return arreglo_localstorage;
  }

  subir_arreglo_localstorage(arreglo) {
    localStorage.setItem("pacientes", JSON.stringify(arreglo));
  }

  agregar_paciente(paciente) {
    console.log("ENTRE EN AGREGAR PACIENTE");

    console.log(this.descargar_arreglo_localstorage());
    let pacientes = this.descargar_arreglo_localstorage();
    console.log(pacientes);
    pacientes.push(paciente);
    this.subir_arreglo_localstorage(pacientes);
  }

  agregar_examen(rut_paciente, tipo, examen) {
    let pacientes = this.descargar_arreglo_localstorage();

    for (let i = 0; i < pacientes.length; i++) {
      console.log("i: " + i);
      console.log("PACIENTES :" + pacientes[i].rut);
      console.log("RUT INGRESADO : " + rut_paciente);

      if (pacientes[i].rut == rut_paciente) {
        console.log("RUT COINCIDE");

        for (let j = 0; j < pacientes[i].examenes.length; j++) {
          console.log("j: " + j);
          console.log("a : " + pacientes[i].examenes[j].tipo);
          console.log("a : " + tipo);

          if (pacientes[i].examenes[j].tipo == tipo) {
            console.log("EXAMEN COINCIDE");
            pacientes[i].examenes[j].lista.push(examen);
          }
        }
      }
    }
    this.subir_arreglo_localstorage(pacientes);
  }

  agregar_examen(rut_paciente, tipo, examen) {
    alert(rut_paciente);
    let pacientes = this.descargar_arreglo_localstorage();

    for (let i = 0; i < pacientes.length; i++) {
      console.log("i: " + i);
      console.log("PACIENTES :" + pacientes[i].rut);
      console.log("RUT INGRESADO : " + rut_paciente);

      if (pacientes[i].rut == rut_paciente) {
        console.log("RUT COINCIDE");

        for (let j = 0; j < pacientes[i].examenes.length; j++) {
          console.log("j: " + j);
          console.log("a : " + pacientes[i].examenes[j].tipo);
          console.log("a : " + tipo);

          if (pacientes[i].examenes[j].tipo == tipo) {
            console.log("EXAMEN COINCIDE");
            pacientes[i].examenes[j].lista.push(examen);
          }
        }
      }
    }
    this.subir_arreglo_localstorage(pacientes);
  }

  agregar_pariente(rut_paciente, pariente) {
    alert(rut_paciente);
    let pacientes = this.descargar_arreglo_localstorage();

    for (let i = 0; i < pacientes.length; i++) {
      console.log("i: " + i);
      console.log("PACIENTES :" + pacientes[i].rut);
      console.log("RUT INGRESADO : " + rut_paciente);

      if (pacientes[i].rut == rut_paciente) {
        console.log("RUT COINCIDE");
        console.log(pacientes[i].parientes);
        pacientes[i].parientes.push(pariente);
      }
    }
    this.subir_arreglo_localstorage(pacientes);
  }
}

//---------------------------------------------------------------
//EXAMENES

class Examen { }

class ExamenDeSangre extends Examen {
  constructor(hemoglobina, globulosBlancos, globulosRojos, plaquetas) {
    this.hemoglobina = hemoglobina;
    this.globulosBlancos = globulosBlancos;
    this.globulosRojos = globulosRojos;
    this.plaquetas = plaquetas;
  }
}

class PruebasFuncionRenal extends Examen {
  constructor(creatinina, urea, acidoUrico, albumina) {
    this.creatinina = creatinina;
    this.urea = urea;
    this.acidoUrico = acidoUrico;
    this.albumina = albumina;
  }
}

class FuncionPulmonar extends Examen {
  constructor(
    capacidadVital,
    volumenCorriente,
    volumenResidual,
    flujoEsencial
  ) {
    this.capacidadVital = capacidadVital;
    this.volumenCorriente = volumenCorriente;
    this.volumenResidual = volumenResidual;
    this.flujoEsencial = flujoEsencial;
  }
}

class ExamenDeGlucosa {
  constructor(
    glucosaEnAyunas,
    glucosaPostPrandial,
    hemoglobinaGlicosilada,
    toleranciaALaGlucosa,
    fecha
  ) {
    this.glucosaEnAyunas = glucosaEnAyunas;
    this.glucosaPostPrandial = glucosaPostPrandial;
    this.hemoglobinaGlicosilada = hemoglobinaGlicosilada;
    this.toleranciaALaGlucosa = toleranciaALaGlucosa;
    this.fecha = fecha;
  }

  obtenerResultado() {
    if (
      this.glucosaEnAyunas < 100 &&
      this.glucosaPostPrandial < 140 &&
      this.hemoglobinaGlicosilada < 5.7 &&
      this.toleranciaALaGlucosa < 140
    ) {
      return "Nivel normal de glucosa";
    } else {
      return "Nivel anormal de glucosa";
    }
  }
}
//----------------------------------------------------
//ENFERMEDADES

let enfermadades = [
  {
    id: 1,
    enfermedad: "Resfriado común",
    sintomas: [
      "Congestión nasal",
      "Secreción nasal",
      "Estornudos",
      "Dolor de garganta",
      "Tos",
      "Fiebre baja",
      "Dolor de cabeza",
    ],
  },
  {
    id: 2,
    enfermedad: "Gripe",
    sintomas: [
      "Fiebre alta",
      "Dolor de cabeza",
      "Dolor muscular",
      "Escalofríos",
      "Dolor de garganta",
      "Tos seca",
      "Congestión nasal",
      "Fatiga",
    ],
  },
  {
    id: 3,
    enfermedad: "Bronquitis aguda",
    sintomas: [
      "Tos con flema",
      "Fatiga",
      "Fiebre baja",
      "Dificultad para respirar",
      "Sibilancias en el pecho",
      "Dolor en el pecho",
      "Dolor de cabeza",
      "Dolor muscular",
    ],
  },
  {
    id: 4,
    enfermedad: "Neumonía",
    sintomas: [
      "Fiebre alta",
      "Tos con flema",
      "Dificultad para respirar",
      "Dolor en el pecho",
      "Fatiga",
      "Confusión",
      "Náuseas",
      "Vómitos",
    ],
  },
  {
    id: 5,
    enfermedad: "Asma",
    sintomas: [
      "Sibilancias en el pecho",
      "Dificultad para respirar",
      "Opresión en el pecho",
      "Tos",
      "Fatiga",
    ],
  },
  {
    id: 6,
    enfermedad: "Alergia",
    sintomas: [
      "Estornudos",
      "Picazón en la nariz",
      "Congestión nasal",
      "Dolor de cabeza",
      "Dolor de garganta",
      "Tos",
      "Ojos llorosos",
      "Hinchazón en la cara",
    ],
  },
  {
    id: 7,
    enfermedad: "Diabetes tipo 1",
    sintomas: [
      "Aumento de la sed",
      "Aumento de la micción",
      "Fatiga",
      "Pérdida de peso",
      "Visión borrosa",
      "Infecciones frecuentes",
      "Cortes y heridas que tardan en sanar",
    ],
  },
  {
    id: 8,
    enfermedad: "Diabetes tipo 2",
    sintomas: [
      "Aumento de la sed",
      "Aumento de la micción",
      "Fatiga",
      "Pérdida de peso",
      "Visión borrosa",
      "Infecciones frecuentes",
      "Cortes y heridas que tardan en sanar",
    ],
  },
  ,
  {
    id: 9,
    enfermedad: "Hipertiroidismo",
    sintomas: [
      "Pérdida de peso",
      "Palpitaciones cardíacas",
      "Nerviosismo",
      "Sudoración excesiva",
      "Temblor en las manos",
      "Fatiga",
      "Debilidad muscular",
      "Diarrea",
    ],
  },
  {
    id: 10,
    enfermedad: "Hipotiroidismo",
    sintomas: [
      "Fatiga",
      "Aumento de peso",
      "Intolerancia al frío",
      "Piel seca",
      "Estreñimiento",
      "Depresión",
      "Dolor muscular",
      "Dificultad para concentrarse",
    ],
  },
  {
    id: 11,
    enfermedad: "Enfermedad celíaca",
    sintomas: [
      "Dolor abdominal",
      "Hinchazón abdominal",
      "Diarrea",
      "Pérdida de peso",
      "Fatiga",
      "Anemia",
      "Erupciones en la piel",
      "Depresión",
    ],
  },
  {
    id: 12,
    enfermedad: "Enfermedad inflamatoria intestinal",
    sintomas: [
      "Diarrea",
      "Dolor abdominal",
      "Pérdida de peso",
      "Fatiga",
      "Fiebre",
      "Sangrado rectal",
      "Anemia",
      "Falta de apetito",
    ],
  },
  {
    id: 13,
    enfermedad: "Síndrome de fatiga crónica",
    sintomas: [
      "Fatiga extrema",
      "Dolor muscular",
      "Dolor articular",
      "Dolor de cabeza",
      "Problemas de memoria y concentración",
      "Dolor de garganta",
      "Ganglios linfáticos inflamados",
    ],
  },
  {
    id: 14,
    enfermedad: "Fibromialgia",
    sintomas: [
      "Dolor muscular",
      "Fatiga",
      "Problemas de sueño",
      "Rigidez matutina",
      "Dolor de cabeza",
      "Problemas de memoria y concentración",
      "Dolor abdominal",
      "Depresión",
    ],
  },
  {
    id: 15,
    enfermedad: "Esclerosis múltiple",
    sintomas: [
      "Problemas de visión",
      "Entumecimiento o debilidad en extremidades",
      "Pérdida de coordinación",
      "Problemas de equilibrio",
      "Fatiga",
      "Problemas de memoria y concentración",
      "Problemas de control de la vejiga",
      "Depresión",
    ],
  },
  {
    id: 16,
    enfermedad: "Parkinson",
    sintomas: [
      "Temblor en las manos, brazos, piernas, mandíbula y cara",
      "Rigidez muscular",
      "Lentitud en los movimientos",
      "Problemas de equilibrio y coordinación",
      "Alteraciones en la postura",
      "Problemas de habla",
      "Depresión",
    ],
  },
  {
    id: 17,
    enfermedad: "Enfermedad de Alzheimer",
    sintomas: [
      "Pérdida de memoria",
      "Dificultad para realizar tareas cotidianas",
      "Problemas de lenguaje",
      "Desorientación temporal y espacial",
      "Disminución del juicio y razonamiento",
      "Cambios de humor y personalidad",
      "Pérdida de iniciativa",
    ],
  },
  {
    id: 13,
    enfermedad: "Síndrome de fatiga crónica",
    sintomas: [
      "Fatiga extrema",
      "Dolor muscular",
      "Dolor articular",
      "Dolor de cabeza",
      "Problemas de memoria y concentración",
      "Dolor de garganta",
      "Ganglios linfáticos inflamados",
    ],
  },
  {
    id: 14,
    enfermedad: "Fibromialgia",
    sintomas: [
      "Dolor muscular",
      "Fatiga",
      "Problemas de sueño",
      "Rigidez matutina",
      "Dolor de cabeza",
      "Problemas de memoria y concentración",
      "Dolor abdominal",
      "Depresión",
    ],
  },
  {
    id: 15,
    enfermedad: "Esclerosis múltiple",
    sintomas: [
      "Problemas de visión",
      "Entumecimiento o debilidad en extremidades",
      "Pérdida de coordinación",
      "Problemas de equilibrio",
      "Fatiga",
      "Problemas de memoria y concentración",
      "Problemas de control de la vejiga",
      "Depresión",
    ],
  },
  {
    id: 16,
    enfermedad: "Parkinson",
    sintomas: [
      "Temblor en las manos, brazos, piernas, mandíbula y cara",
      "Rigidez muscular",
      "Lentitud en los movimientos",
      "Problemas de equilibrio y coordinación",
      "Alteraciones en la postura",
      "Problemas de habla",
      "Depresión",
    ],
  },
  {
    id: 17,
    enfermedad: "Enfermedad de Alzheimer",
    sintomas: [
      "Pérdida de memoria",
      "Dificultad para realizar tareas cotidianas",
      "Problemas de lenguaje",
      "Desorientación temporal y espacial",
      "Disminución del juicio y razonamiento",
      "Cambios de humor y personalidad",
      "Pérdida de iniciativa",
    ],
  },
];
