
import {useState} from 'react'

export default function ContaraAte(){
    const [inicio, setInicio] = useState(0);
    const [fim, setFim ] = useState(0);
    const [resul, setResul] = useState([]);
        

function contarAte() {

            let arr = []
            for(let cont = inicio; cont <= fim; cont ++)
            arr.push(cont + " ");

            setResul (arr)
           
     }
    
    

 return (
    <main>
        <h1>Contador</h1>

                <label>Digite o primeiro numero:</label>
                <input type ="number" value={inicio} onChange={e => setInicio(e.target.value)} />
                <br/>
                <label>Digite o ultimo numero </label>
                <input type="number" value={fim} onChange={e => setFim(e.target.value)} />
                <br/>
                <button onClick={contarAte}> Calcular </button>             
                <div>  {resul} </div> 
            </main>
 )
}