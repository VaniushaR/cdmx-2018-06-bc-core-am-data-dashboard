let b;
let datos="https://raw.githubusercontent.com/MichBecerra/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"
let clicking = function(){
  let a;
  fetch(datos).then(function(enlace){
    return enlace.json();
  }).then(function(sedes){
    console.log( "1 "+ sedes.mexico.generacion.cuarta.estudiantes);
    a = sedes.mexico.generacion.cuarta.estudiantes;
    b = computeStudentsStats( a )
    console.log( "1.1 "+b )
  })
}

function a(){
  console.log( "2 "+clicking() )
  console.log( "4 "+ b )
  //computeStudentsStats( clicking() )
}

function computeStudentsStats( laboratoria ) {
  let a = [];
  console.log( "3 "+laboratoria );
  laboratoria.forEach(function(element){
    console.log("element:  "+ element);
    name = element.nombre;
    email = element.correo;
    student = new student(name,email);
    a.push(student);
  });
  return a;
}

class student {
  constructor(name, email,campus,generation,stats) {
    this.name = name;
    this.email = email;
    this.campus = campus;
    this.generation = generation;
    this.stats = stats;
  }
}
class Stats {
  constructor(status,completedPercentage,topics) {
    this.status = status;
    this.completedPercentage = completedPercentage;
    this.topics = topics;
  }
}

/*
computeGenerationsStats: (laboratoria) => {

};

sortStudents: (students, orderBy, orderDirection) => {

};

/* La función sortStudents() se encarga de ordenar la lista de estudiantes creada con computeStudentsStats()
en base a orderBy y orderDirection.

Argumentos

students: Arreglo de objetos creado con computeStudentsStats().
orderBy: String que indica el criterio de ordenado. Debe permitir ordenar por nombre y porcentaje de completitud.
orderDirection: La dirección en la que queremos ordenar. Posibles valores: ASC y DESC (ascendente y descendente).
Valor de retorno

Arreglo de estudiantes ordenado.

filterStudents: (students, search) => {

}; */
