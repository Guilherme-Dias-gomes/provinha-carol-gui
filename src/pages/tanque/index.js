import {useState} from 'react'

export default function Gasosa () {
    const [capac, setCapac] = useState()
    const [consumo, setConsumo] = useState()
    const [dist, setDist] = useState()
    const [resul, setResul] = useState()

    function viagem () {

        let a = Math.ceil(dist / consumo / capac)
        setResul(a)
    }

    return(
        <div>
            <div>
                <div>
                    <h1>Quantidades de Paradas</h1>
                    <input type='number' placeholder='Digite a capacidade' value={capac}  onChange={e => setCapac(e.target.value)}></input>
                    <input type='number' placeholder='Digite o consumo' value={consumo}  onChange={e => setConsumo(e.target.value)}></input>
                    <input type='number' placeholder='Digite a distância' value={dist}  onChange={e => setDist(e.target.value)}></input>
                </div>
                <div>
                    <h1>Paradas: {resul}</h1>
                    <button onClick={viagem}>Calcular</button>
                </div>
            </div>
        </div>
    )
}

