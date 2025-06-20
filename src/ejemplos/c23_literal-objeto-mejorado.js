// Clase 23: Literal Objeto mejorado

export default function LiteralesDeObjetosMejorados() {
    let apellido = 'Barrera';

    const paisProp = 'pais';
    const paisValor = 'CL';
    const idioma = 'es';

    let persona = {
        nombre: 'Felipe',
        //apellido: apellido
        apellido, //Se asume que el objeto persona tendrá una propiedad llamada apellido = 'Barrera'
        funcionNormal() {},
        funcionFlecha: () => {},
        [paisProp]: paisValor,
        [`pais_${idioma}`]: paisValor // clave dinámica computada: construye la clave: "pais_es"
    };

    // Acceder a los valores de las propiedades
    const retornarValorPropiedadPersona = (prop) => persona[prop];

    console.log(retornarValorPropiedadPersona('apellido'));

    console.log(persona);
}