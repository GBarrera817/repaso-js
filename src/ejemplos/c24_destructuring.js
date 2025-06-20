// Clase 24: Destructurar (destructuring)

export default function DestructurarEjemplo() {
    let persona = {
        nombre: 'Felipe',
        apellido: 'Barrera', //Se asume que el objeto persona tendrá una propiedad llamada apellido = 'Barrera'
        edad: 990,
        fechaActual: new Date()
    };

    // Ejemplo 1: Destructurando las propiedades de un objeto

    // const nombre = persona.nombre;
    // const apellido = persona.apellido;
    // const edad = persona.edad;

    // console.log(nombre, edad, apellido);

    // Destructuración
    const {nombre, apellido, edad} = persona;
    console.log(nombre, edad, apellido);

    // Ejemplo 2: Destructurando el valor de retorno de una función

    const obtenerDireccion = () => {
        return {
            calle: 'Mi calle',
            pais: 'Mi pais',
            provincia: 'Mi provincia'
        }
    };

    const { pais, provincia } = obtenerDireccion();

    console.log(pais, provincia);

    // Ejemplo 3: Destructurando el parámetro de una funcion
    const imprimirNombre = (persona) => {

        console.log(persona.nombre);

        const nombreEnMayuscula = persona.nombre.toUpperCase();
        console.log(nombreEnMayuscula);
    }

    const imprimirNombre2 = ({nombre}) => {
        console.log(nombre);

        const nombreEnMayuscula = nombre.toUpperCase();
        console.log(nombreEnMayuscula);
    }

    imprimirNombre(persona);
    imprimirNombre2(persona);

    // Ejemplo 4: Destructurando un array
    
    const numeros = [1, 2, 3, 4];

    const [primero, segundo, , cuarto] = numeros; // el /*tercero*/ se omite
    console.log(primero, segundo, cuarto);

    const retornaArreglo = () => {
        return ['Felipe', 'Gavilán'];
    }

    const [nombreA, apellidoA] = retornaArreglo();
    console.log(nombreA, apellidoA);
}