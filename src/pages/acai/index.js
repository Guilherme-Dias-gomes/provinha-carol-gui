import { useState } from "react";


export default function Acai() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState (0);
    const [desc, setDesc] = useState();
    const [resul, setResul] = useState(0);


    function açais(){
   let açai = n1 * 13.5 + n2 * 15 + n3 * 17.5;
    let d = açai - (açai * (desc/100));
   setResul(d);
 


}

    return(
        <section className="contador">

            <h1> Acai</h1>

            <div> Acai peq: <input type="number" value={n1} onChange={e => setN1(Number(e.target.value))}></input> </div>
            <div> Acai med: <input type="number" value={n2} onChange={e => setN2(Number(e.target.value))}></input> </div>
            <div> Acai grand: <input type="number" value={n3} onChange={e => setN3(Number(e.target.value))}></input> </div>
            <div> desc: <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}></input> </div>
            <div>  {resul} </div>

            <button onClick={açais}> Calcular </button>
        </section>
    )
}