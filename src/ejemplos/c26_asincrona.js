// Clase 26: Promesas y Async/Await (Programación asíncrona)

export default function Promesa() {
    // Promesa: es una "garantía" de que la función en el futuro dará un resultado
    // Cuando haya una resolución de lo que se está haciendo, la promesa da un aviso y yo puedo ejecutar mi propio código
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respuesta => respuesta.json()) // si es exitosa 
    .catch(error => console.log('Hubo un error: ' + error)) // En caso de que haya error, ejecuta esto
    // respuesta.json() devuelve otra promesa, por eso se tiene que volver a hacer un then para poder ejecutar el código cuando llegue la respuesta del json
    .then(json => console.log(json));
}

// Async / Await

export async function AsyncAwait() {
    try {
        // Await: significa que la aplicación puede 'esperar' de manera asíncrona 
        // mientras que el codigo luego del await se ejecuta, la aplicación es libre de seguir funcionando y cuando la operación termine, se va a ejecutar la siguiente línea de código
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();

        console.log(json);

    }
    catch (error) {
        console.error('Hubo un error en AsyncAwait ' + error);
    }
}