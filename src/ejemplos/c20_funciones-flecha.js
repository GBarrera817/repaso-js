// Clase 20: Funciones flecha

/* Funcion tradicional u ordinaria */
// <palabra reservada function> <nombreFuncion> (<parametros>) {
    // Cuerpo de la funcion
//} 
function duplicar(valor) {
    return valor * 2;
}

/** Funcion anónima: ya que no tiene un Nombre 
 * La flecha (=>) separa los parámetros de entrada del cuerpo de la función
*/
let funcionAnonima = (valor) => {
    return valor * 2;
}

// Si la funcion tiene una sola linea y un solo parámetro se puede simplificar de la siguiente manera:
let funcionAnonima2 = valor => valor * 2;

funcionAnonima2(3); // 6

let sumar = (sumando1, sumando2) => sumando1 + sumando2;

sumar(1,2); // 3

let imprimirAlgo = () => console.log('prueba');

imprimirAlgo();

function funcionQueRecibeComoParametroOtraFuncion(funcion) {
    funcion();
}

// En este caso la variable imprimirAlgo tiene que haberse declarado previamente
funcionQueRecibeComoParametroOtraFuncion(imprimirAlgo);

// En caso de solo querer utilizar la funcion sin declararla
funcionQueRecibeComoParametroOtraFuncion(() => console.log('lo que yo quiera'));

/** La principal diferencia entre el uso de las funciones tradicionales y las funciones anónimas es el uso del THIS: permite acceder al contexto en el cual se ejecuta el código actual. 
 * 
 * En una funcion normal, el valor del this es el valor del objeto que hizo la invocación de la función, es decir
 * el valor varía según cómo se ejecute la función.
 * En la función flecha, el this no depende de quien llame la función, sino del LUGAR en el cual la función fue definida (ambiente original)
*/

export function EjemploThis(){
    const persona = {
        nombre: 'Felipe',
        edad: 888,
        saludarNormal: function(){
            setTimeout(function(){
                console.log('Hola, soy ' + this.nombre);
            }, 1000);
        },
        saludarFlecha: function(){
            setTimeout(() => {
                console.log('Hola, soy ' + this.nombre);
            }, 1000);
        }
    };

    /**
     *  Lo que se ejecuta en el contexto de window, donde window es el objeto que representa al navegador,
        Entonces busca nombre en el objeto window
     */
    persona.saludarNormal(); // Hola, soy undefined, la funcion se ejecuta en main.js.
    
    /**
     * En la funcion flecha, el this representa el objeto en el cual fue declarada la funcion, y como esa funcion fue decladara dentro del contexto persona, entonces this hace referencia a persona.
     */
    persona.saludarFlecha(); // Hola, soy Felipe
}



