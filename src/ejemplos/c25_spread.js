// Clase 25: Operador Spread (...)
// El operador Spread sirve para tomar un arreglo o un objeto y expandirlo para que pueda satisfacer los parámetros de una función o las propiedades de un objeto

export default function OperadorSpread() {

    // Ejemplo 1: Operador spread con una función
    const sumar = (a, b) => a + b;
    const numeros = [2, 3];

    // const resultado = sumar(numeros[0], numeros[1]);
    // console.log(resultado);

    // spreading
    // (a, b) <= [1, 2] 
    // a = 1
    // b = 2
    // ....
    const resultado = sumar(...numeros); 
    // console.log(resultado);

    // Ejemplo 2: Concatenando arreglos
    const masNumeros = [1, ...numeros]; // [1, 2, 3]
    const masNumerosV2 = [1, numeros]; // Olvidé poner los ... => [1, [2, 3]]
    // console.log(masNumeros);
    // console.log(masNumerosV2);

    // Ejemplo3: Concatenando varios arreglos
    const otrosNumeros = [4, 5];
    const muchosNumeros = [...numeros, ...otrosNumeros]; // [2, 3, 4, 5]
    // console.log(muchosNumeros);

    // Ejemplo 4: Destructurando y usando el operador spread sobre un arreglo
    
    const [primero, ...resto] = muchosNumeros;

    // console.log(muchosNumeros);
    // console.log(primero);
    // console.log(resto);

    // Ejemplo 5: Clonando un arreglo
    /**
     * Los arreglos en JS son Tipos de referencia
     * Cuando se asigna a una variable un arreglo, se asigna una referencia al valor en memoria
     * Si modifico el valor que se encuentra en memoria, este cambio se propagará a cualquier variable 
     * que haga referencia a dicho valor.
     */

    // const muchosNumeros2 = muchosNumeros; // Se pasa la referencia. Las 2 variables APUNTAN al mismo arreglo
    // muchosNumeros2.push(6);

    // console.log(muchosNumeros);  // (5) [2, 3, 4, 5, 6]
    // console.log(muchosNumeros2); // (5) [2, 3, 4, 5, 6]

    const muchosNumerosClonado = [...muchosNumeros];
    console.log(muchosNumerosClonado);
    muchosNumerosClonado.push(6);

    console.log(muchosNumeros);  // (5) [2, 3, 4, 5]
    console.log(muchosNumerosClonado); // (5) [2, 3, 4, 5, 6]

    // Ejemplo 6: Operador Spread sobre un objeto
    const persona = {
        nombre: 'Gabriela',
        apellido: 'Barrera'
    };

    const persona2 = {
        ...persona,
        edad: 999,
        direccion: {
            pais: 'CL',
            provincia: 'Coquimbo'
        }
    }

    console.log(persona2);
}