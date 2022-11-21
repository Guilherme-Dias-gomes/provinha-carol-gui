import {useState} from 'react'


export default function SalarioLiquido(){
    const [salario, setSalario] = useState (0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [valorfinal, setValorfinal] = useState(0);



     function calcularSalarioMensal(){

        let d = (salario *(desconto/100) + salario) - bonus
        setValorfinal(d);


    }

    return(

        <section>
            <h1>Salário</h1>

            <label>Digite o Salario</label>
                    <input type ="number" value={salario} onChange={e => setSalario(e.target.value)} />
            <br/>
            <label>Digite o bonus </label>
                    <input type="number" value={bonus} onChange={e => setBonus(e.target.value)} />
            <br/>
            <label>digite o desconto</label>
                    <input type="number" value={desconto} onChange={e => setDesconto(e.target.value)}/>
            <br/>
            <button onClick={calcularSalarioMensal}>Calcular</button>
            <div>
            {valorfinal}
            </div>
        </section>
        )
    }