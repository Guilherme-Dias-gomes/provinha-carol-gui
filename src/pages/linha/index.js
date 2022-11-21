import {useState} from "react";


export default function Linhas() {
         const [linha, setLinha] = useState(0);
         
         const [resul, setResul] = useState([]);

          function Calcular(){
            let arr = []
            for (let cont =1; cont <= linha; cont++){
                let asterisco = "*"
               arr.push(`${asterisco}`);


          }  
          setResul(arr)

}

    return(
    <main>
        <h1>Linhas</h1>
        <label>Digite o primeiro numero:</label>
        <input type ="number" value={linha} onChange={e => setLinha(e.target.value)} />
        <br/>
        <button onClick={Calcular}> Calcular </button>             
        <div>  {resul} </div> 
    </main>
    )
}

