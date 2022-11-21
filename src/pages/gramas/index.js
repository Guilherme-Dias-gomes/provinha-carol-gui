import { useState } from "react";


export default function Soveteria() {
      const [gramas, setGrmas] = useState(0);
      const [resul, setResul] = useState(0);


      function calcularGramas() {

            let a = 0.035;
            let b = a * gramas;
            let c = 0.030;
            let d = c * gramas;
            if (gramas < 0) { return setResul("Peso invalido") }
            setResul(b);
            if (gramas > 1000) { setResul(d) }
      }

      return (
            <section className="contador">
                  <h1> Sorvete</h1>
                  <div> Gramas <input type="number" value={gramas} onChange={e => setGrmas(Number(e.target.value))}></input>
                  </div>
                  <button onClick={calcularGramas}> Calcular </button>
                  <div>  {resul} </div>
            </section>

      )
}

