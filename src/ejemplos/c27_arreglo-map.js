// Clase 27: Array map

export default function MapEjemplo(){
    
    // Ejemplo 1: Transformando números

    const numeros = [1,2,3,4,5];
    // console.log(numeros);

    // La función map toma cada valor del array, hacerles una transformación 
    const cuadrados = numeros.map(n => n*n); // [1, 4, 9, 16, 25]
    // console.log(cuadrados);

    // Ejemplo 2: Extrayendo un valor de un arreglo de objetos

    const personas = [
        { id: 1, nombre: 'Felipe', pais: 'RD'},
        { id: 2, nombre: 'Claudia', pais: 'MX'},
        { id: 3, nombre: 'Roberto', pais: 'CL'},
    ];
    console.log(personas);

    const ids = personas.map(persona => persona.id);
    console.log(ids);

    const nombres = personas.map(persona => persona.nombre);
    console.log(nombres);

    // Extrae nombre y pais 
    const nombresYPaises = personas.map(persona => {
        // Retorno un nuevo objeto que tiene las propiedades nombre y pais 
        return {
            nombre: persona.nombre,
            pais: persona.pais
        };
    });
    console.log(nombresYPaises);

    // Ejemplo 3: Generando UI
    /**
     * <ul>
     *  <li>1</li>
     *  <li>2</li>
     *  <li>3</li>
     *  <li>4</li>
     *  <li>5</li>
     * </ul>
     */

    const elementosDeLista = numeros.map(valor => 
        `<li>${valor}</li>`
    );

    // [1,2,3] => Join: 123 
    const lista = `
        <ul>${elementosDeLista.join('')}</ul>
    `;

    console.log(lista);

    return lista;
}