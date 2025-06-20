// Clase 18: Módulos en Javascript

export function funcionExportada(){
    console.log('Ejecutando la funcion exportada');
}

function funcionOculta() {
    console.log('Esta función no puede ser invocada desde fuera del modulo');
}

export let configuracionesGlobales = {
    idioma: 'ESP',
    logueado: false
}

export default function functionPrincipal() {
    console.log('Ejecutando la función principal');
}