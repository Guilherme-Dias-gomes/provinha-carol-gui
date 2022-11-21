import { useState } from "react";

export default function Cafe(){
    const [alunos, setAlunos] = useState();
    const [garrafa, setGarrafa] = useState();
    const [mililitros, setMililitros] = useState ();
    const [resul, setResul] = useState();


    function Café(){

    let x = garrafa*1000
    let b = (alunos * mililitros)/x
    setResul(b)
    Math.floor(b)
  

    }

    return(
        <section className="contador">

        <h1> Café</h1>

        <div> qtd alunos: <input type="number" value={alunos} onChange={e => setAlunos(Number(e.target.value))}></input> </div>
        <div> qtd litros: <input type="number" value={garrafa} onChange={e => setGarrafa(Number(e.target.value))}></input> </div>
        <div> qtd mililitros: <input type="number" value={mililitros} onChange={e => setMililitros(Number(e.target.value))}></input> </div>
        <div>  {resul} </div>

        <button onClick={Café}> Calcular </button>
    </section>
    )
}