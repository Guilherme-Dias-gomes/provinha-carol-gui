import { useState } from "react";

export default function Signos(){
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState(0);
    const [resultado, setResultado] = useState('')

  function logica(){
   if((mes === "setembro" && dia >= 23 && dia <=30 || (mes === "outubro" && dia >= 22 && dia <=31 )))
  {
    return setResultado("É libra")
  }
  else{
    return setResultado ("Não é libra")
  }


  }


    return(
       <main >
        <h1>Signos</h1>
        <div> mes <input type="text" value={mes} onChange={e => setMes(e.target.value)}></input> </div>
        <div> dia <input type="number" value={dia} onChange={e => setDia(Number(e.target.value))}></input> </div>
        <button onClick={logica}>Vereficar</button>
        <div>  {resultado} </div>

       </main>)
}