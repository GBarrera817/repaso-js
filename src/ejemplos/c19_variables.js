// Clase 19: Variables: let y const

export default function VariablesEjemplo() {

    let apellido = 'Barrera';
    apellido = 'Angel';

    let edad = 31;
    let fecha = new Date();
    let persona = {
        nombre: 'Felipe',
        apellido: 'Gavilán',
        edad: 39,
        fechaActual: new Date(),
        estaLogueado: true
    };

    let miFuncion = function duplicar(valor){
        return valor * 2;
    }

    var pais = 'Chile';
    pais = 'Mexico';


    // for (var i = 1; i<=10; i++){
    //     //...
    // }
    // console.log(i); // 11 => no tiene sentido, ya que la variable se definió en el cuerpo del for, debería dar error

    for (let i = 1; i<=10; i++){
        //...
    }
    // console.log(i); // Uncaught ReferenceError: i is not defined

    const continente = 'América';
    // continente = 'Europa'; // No se puede reasignar el valor de una constante: Uncaught TypeError: Assignment to constant variable.

    const ingredientes = ['Queso', 'Jamón'];
    // ingredientes = ['Salami']; // variables.js:39 Uncaught TypeError: Assignment to constant variable.

    ingredientes.push('Vegetales');
    console.log(ingredientes);
}