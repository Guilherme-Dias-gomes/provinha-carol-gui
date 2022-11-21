import { useState } from 'react'

export default function Orcamento() {
    const [ganho, setGanho] = useState()
    const [gastos, setGastos] = useState()
    const [resul, setResul] = useState()

    function   situacaoOrcamento () {
        let mensagem = ''
        let calc = (gastos/ganho *100)
    
        if(calc >= 0 && calc <= 20)
        mensagem=('Cuidado, seu orçamento pode ficar comprometido!')
    
        else if(calc >= 21 && calc <= 50)
        mensagem=('Muito bem, seus gastos não ultrapassam metade dos ganhos!')
    
        else if(calc >= 51 && calc <= 80)
        mensagem=('Atenção, melhor conter os gastos!')
    
        else if(calc >= 81 && calc <= 100)
        mensagem=('Cuidado, seu orçamento pode ficar comprometido!')
    
        else if(calc > 100)
        mensagem=('Orçamento comprometido! hora de rever seus gastos!')
    
        setResul(mensagem);
    
    }

    return(
        <div>
            <div>
                <div>
                    <h1>Orçamento</h1>
                    <input type='number' placeholder='Ensira o ganho' value={ganho} onChange={e => setGanho(e.target.value)}/>
                    <input type='number' placeholder='Ensira os gasto' value={gastos} onChange={e => setGastos(e.target.value)}/>
                </div>
                <div>
                    <h1>Resposta: {resul}</h1>
                    <button onClick={situacaoOrcamento}>Calcular</button>
                </div>
            </div>
        </div>
    )
}