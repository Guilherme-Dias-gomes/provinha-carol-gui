import { useState } from 'react'

export default function Cinema () {
    const [inteira, setInteira] = useState()
    const [meia, setMeia] = useState()
    const [dia, setDia] = useState('')
    const [nacional, setNacional] = useState(false)
    const [resul, setResul] = useState()

    function valorIngressos () {
        let mensagem = 0
       
        if(nacional === true)
        mensagem = (inteira * 5) + (meia * 5)
    
        else if(dia === 'quarta-feira')
        mensagem = (inteira * 14.25) + (meia * 14.25)
    
        else
        mensagem = (inteira * 28.50) + (meia * 14.25)
    
        setResul(mensagem);
    }

    return (
        <div>
            <div>
                <div>
                    <h1>Cineminha</h1>
                    <input type='number' placeholder='Quantidade de inteiras' value={inteira} onChange={e => setInteira(e.target.value)}></input>
                    <input type='number' placeholder='Quantidade de meias' value={meia} onChange={e => setMeia(e.target.value)}></input>
                    Quarta?:<input type='radio' value={dia} onChange={e => setDia(e.target.value)}></input>
                    Nacional?:<input type='radio' value={nacional} onChange={e => setNacional(e.target.value)}></input>
                </div>
                <div>
                    <h1>Total á pagar: {resul}</h1>
                    <button onClick={valorIngressos}>Calcular</button>
                </div>
            </div>
        </div>
    )
}