// Clase 21: Template strings
export default function TemplateStringsEjemplo() {
    const nombre = 'Gabriela Barrera';
    const pais = "CL";

    // Concatenar clasica
    const saludo = "Hola, " + nombre + ", ¿Cómo estás?";

    // Template strings
    const saludo2 = `Hola, ${nombre}, ¿Cómo estás?`; // Usando tiles o (backticks)

    const sumar = (a, b) => a + b;

    const mensaje = `
    Hola, ${nombre}
    
    Esta es una carta

    La suma de 2 y 3 es ${sumar(2,3)}

    Atte: Yo`;

    console.log(mensaje);

}