import React from "react"

export default function Dados(props){
    const n1=10
    const n2=5
    return(
        <section>
            //canal() ,youtube,curso sao variaveis declaradas em App.js lugar onde ta sendo usado o Dados
            <h1>dados de outra pasta</h1>
            <p>Canal:{props.canal()}</p>
            <p>Youtube:{props.youtube}</p>
            <p>Curso:{props.curso}</p>
            <p>{"A soma de "+ n1 + " com " + n2 + " e igual " + props.somar(10,n2)}</p>

        </section>
    )
}