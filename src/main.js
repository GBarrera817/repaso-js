import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
// import TemplateStringsEjemplo from './ejemplos/c21_template-strings.js'
// import funcionPrincipal, { funcionExportada, configuracionesGlobales } from './ejemplos/modulo.js'
// import VariablesEjemplo from './ejemplos/variables.js' 
// import { EjemploThis } from './ejemplos/funciones-flecha.js'
//import OperadorTerminarioEjemplo from './ejemplos/operador-ternario.js'
// import LiteralesDeObjetosMejorados from './ejemplos/c23_literal-objeto-mejorado.js'
// import DestructurarEjemplo from './ejemplos/c24_destructuring.js'
// import OperadorSpread from './ejemplos/c25_spread.js'
// import { Rectangulo, Cuadrado } from './ejemplos/c26_clases.js'
import MapEjemplo from './ejemplos/c27_arreglo-map.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

  <div id="listado"></div>
`

setupCounter(document.querySelector('#counter'))

// Clase 18: Módulos en Javascript
/*
funcionExportada();
console.log(configuracionesGlobales.idioma);
funcionPrincipal();
*/

// Clase 19: Variables: let, var y const
// VariablesEjemplo();

// Clase 20: Funciones flecha
// window.nombre = 'Claudia';
// EjemploThis();

// Clase 21: TemplateStrings
// TemplateStringsEjemplo();

// Clase 22: Operador ternario
// OperadorTerminarioEjemplo();

// Clase 23: Literal objeto mejorado
// LiteralesDeObjetosMejorados();

// Clase 24: Destructurar
// DestructurarEjemplo();

// Clase 25: Operador Spread
// OperadorSpread();

// Clase 26: Clases
// const rectangulo1 = new Rectangulo(2, 3);
// console.log(rectangulo1.alto);
// console.log(rectangulo1.ancho);
// rectangulo1.area();

// const rectangulo2 = new Rectangulo(4, 5);
// rectangulo2.area();

// const cuadrado1 = new Cuadrado(5);
// cuadrado1.area();

// Clase 27: Arreglo Map

const lista = MapEjemplo();
document.querySelector('#listado').innerHTML = lista;