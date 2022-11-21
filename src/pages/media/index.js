import { useState } from 'react'
import { calcMedia, calcMaior, calcMenor } from '../../service.js'

export default function Media () {
    const [alunos, setAlunos] = useState([])
    const [qtd, setQtd] = useState()

    const [media, setMedia] = useState(0)
    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)

    function exibirAluno () {
        var arr = []

        for(let i = 0; i < qtd; i++) {
            arr.push(i)
            
        }
        setAlunos(arr)
    }

    function alterar (pos, novoValor) {
        alunos[pos] = Number(novoValor)
        setAlunos([...alunos]);
    }

    function calcular () {
        const a = calcMedia(alunos)
        const b = calcMaior(alunos)
        const c = calcMenor(alunos)

        setMedia(a);
        setMedia(b);
        setMedia(c); 

    }

    return(
        <div>
            <div>
                <div>
                    <h3>QTD Aluno:</h3>
                    <input placeholder='digite a qtd de alunos' value={qtd} onChange={e => setQtd(Number(e.target.value))}></input>
                    <button onClick={exibirAluno}>OK</button>
                </div>

                {alunos.map ((item, pos) =>
                    <div> Aluno: {pos + 1} <input type='number' value={setAlunos[pos]} onChange={e => alterar(pos, e.target.value)} /> </div>    
                )}

                <div>
                    |<h1>Média</h1>
                    <button onClick={calcular}>calcular</button>
                </div>

                    <div>
                        Média: {media}
                    </div>
                    <div>
                        Maior: {maior}
                    </div>
                    <div>
                        Menor: {menor}
                    </div>

            </div>
        </div>
    )
}