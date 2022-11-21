import { useState } from "react";

export default function Febre(){
    const[temperatura,SetTemperatura] = useState(0);
    const[Resultado,setResul] = useState(0)

    function Medir(){
        
        if(temperatura >= 41 ){
            return setResul ("Hipertemia")
        }

        else if(temperatura >= 39.6 && temperatura < 41){
            return setResul ("febre alta")
        }

        else if(temperatura >= 37.6 && temperatura < 39.6){
            return setResul ("febre")
        }

        else if(temperatura >= 36 && temperatura < 37.6){
            return setResul ("normal")
        }
        else if(temperatura <= 36){
            return setResul ("Hipotemia")
        }

    }


    return(
        <main>
            <h1>temperatura</h1>
            <div> coloque suaa temperatura: <input type="text" value={temperatura} onChange={e => SetTemperatura(e.target.value)}></input> </div>
            <button onClick={Medir}>Vereficar</button>
            <div> você estar {Resultado} </div>
        </main>
    )
    
    
}
