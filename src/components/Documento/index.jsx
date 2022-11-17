import Footer from "../Footer";
import "../../App.css";
import img1 from "../../img/snippet.png";
import img2 from "../../img/example1.png";
import img3 from "../../img/example2.png";
import img4 from "../../img/binary.png";
import img5 from "../../img/class.png";
import img6 from "../../img/fib.png";
import img7 from "../../img/insertion_sort.png";
import img8 from "../../img/maps.png";
import img9 from "../../img/quick1.png";
import img10 from "../../img/quick2.png";
import img11 from "../../img/test.png";
import aura from "../../services/aura.exe"



const Documento = () => {
  return (
    <div className="container">
      <div className="row" id="aside-sticky">
        <div className="col-3 container" id="links">
          <div
            id="simple-list-example"
            className="d-flex flex-column gap-2 simple-list-example-scrollspy"
          >
            <a
              className="p-1 rounded"
              href="#simple-list-item-1"
              id="title-aside"
            >
              ¿Qué es AURA?
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-2"
              id="title-aside"
            >
              Fragmento de código
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-3"
              id="title-aside"
            >
              Instalación
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-4"
              id="title-aside"
            >
              Descargar aura.exe
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-5"
              id="title-aside"
            >
              array.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-6"
              id="title-aside"
            >
              binary.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-7"
              id="title-aside"
            >
              class.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-8"
              id="title-aside"
            >
              fib.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-9"
              id="title-aside"
            >
              func.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-10"
              id="title-aside"
            >
              insertion_sort.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-11"
              id="title-aside"
            >
              maps.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-12"
              id="title-aside"
            >
              quicksort.aura
            </a>
            <a
              className="p-1 rounded"
              href="#simple-list-item-13"
              id="title-aside"
            >
              test.aura
            </a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabindex="0"
          >
            <h4 id="simple-list-item-1">¿Qué es AURA?</h4>
            <p>
              Este es un lenguaje de programación inspirado en javascript,
              python y golang, el objetivo es crear un lenguaje de programación
              en español que ayude a las personas que se inician en el
              desarrollo de software o en la informática, probando un lenguaje
              de programación de alto nivel en español que sea muy sencillo de
              utilizar.
            </p>

            <h4 id="simple-list-item-2">Fragmento de código</h4>
            <img src={img1} alt="code" />

            <h4 id="simple-list-item-3">Instalación</h4>
            <p>
              1 - Ve a Realeses y descarga la versión que prefieras si usas
              windows tienes que descargar el archivo .exe
            </p>
            <p>
              2 - mueva el binario a una carpeta de su preferencia, por ejemplo:
            </p>
            <img src={img2} alt="ejemplo1" />
            <p>3 - Entonces tienes que poner el lenguaje aura en tu path:</p>
            <img src={img3} alt="ejemplo2" />
            <p>
              entonces despues de esto puedes crear un archivo o jugar con el
              repl. para jugar con la réplica sólo tienes que ejecutar: $ aura
            </p>
            <p>
              para utilizar un archivo puede crear un archivo con la extensión
              .aura y ejecutarlo (Es importante que tenga la extensión .aura, de
              lo contrario el lenguaje no leerá el archivo): $ aura file.aura
            </p>

            <h4 id="simple-list-item-4">Descargar aura.exe</h4>
            <p>
              Para descargar el archivo, has click en el siguiente boton: <a href={aura} >descarga aca</a>
            </p>
            
            <h4 id="simple-list-item-5">array.aura</h4>
            <p>
              <span>mi_lista := lista[2, 3, 5];</span><br />
              <span>escribir(mi_lista);</span><br /><br />

              <span>escribir("mi lista es: ", mi_lista);</span><br />
              <span>escribir("el largo de mi lista es: ", largo(mi_lista));</span><br />
              <span>escribir("el primer valor de mi lista es ", mi_lista[0])</span><br /><br />

              <span>mi_lista:pop();</span><br />
              <span>mi_lista:agregar(10);</span><br />
              <span>escribir(mi_lista);</span><br />
              <span>mi_lista:porCada(|x| => escribir(x));</span><br />
              <span>escribir(suma(mi_lista));</span>
            </p>

            <h4 id="simple-list-item-6">binary.aura</h4>
            <img src={img4} alt="binary" />

            <h4 id="simple-list-item-7">class.aura</h4>
            <img src={img5} alt="class" />

            <h4 id="simple-list-item-8">fib.aura</h4>
            <img src={img6} alt="fib" />

            <h4 id="simple-list-item-9">func.aura</h4>
            <p>
              <span>funcion sum(a, b) => a + b;</span>
            </p>
            <h4 id="simple-list-item-10">insertion_sort.aura</h4>
            <img src={img7} alt="insertion_sort" />

            <h4 id="simple-list-item-11">maps.aura</h4>
            <img src={img8} alt="maps" />

            <h4 id="simple-list-item-12">quicksort.aura</h4>
            <img src={img9} alt="quicksort" />
            <img src={img10} alt="quicksort" />

            <h4 id="simple-list-item-13">test.aura</h4>
            <img src={img11} alt="test" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Documento;
