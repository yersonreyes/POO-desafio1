class Consultorio {
  constructor(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
  }

  agregarPaciente(nuevoPaciente) {
    this.pacientes.push(nuevoPaciente);
  }

  buscarPacientePorRut(rutDelPacienteABuscar) {
    return this.pacientes.filter(function (pasiente) {
      return pasiente.rut == rutDelPacienteABuscar;
    });
  }
}

class Paciente {
  #diagnostico;
  constructor(nombre, apellido, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.rut = rut;
    this.#diagnostico = diagnostico;
  }

  //Accessors
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  set nombreCompleto(nuevoNombreCompleto) {
    this.nombre = nuevoNombreCompleto.split(" ")[0];
    this.apellido = nuevoNombreCompleto.split(" ")[1];
  }

  //Methods
  imprimirDiagnostico() {
    console.log(`${this.nombre}: ${this.#diagnostico}`);
  }
}

const PacienteUno = new Paciente(
  "Luis",
  "Arancibia",
  30,
  "178089986",
  "Ta loco"
);
const PacienteDos = new Paciente(
  "Ariel",
  "Abarca",
  20,
  "123456789",
  "ta weno y sano"
);

const ConsultorioDePeñaBlanca = new Consultorio("Peñablanca", [
  PacienteUno,
  PacienteDos,
]);

//GETTER
PacienteUno.nombreCompleto;

//SETTER
PacienteUno.nombreCompleto = "Ismael Gomez";

// error: la propiedad es privada
// PacienteUno.#diagnostico

const PacienteEncontrado =
  ConsultorioDePeñaBlanca.buscarPacientePorRut("178089986");

console.log(PacienteEncontrado);
