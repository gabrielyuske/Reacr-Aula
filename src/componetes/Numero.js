import React from "react"
import '../App.css';

export default function Numero(props){
return(
    <p>
        <p>Valor do state num em Numero: {props.num}</p>
        <button onClick={()=>props.setNum(props.num+10)}> + 10</button>
    </p>
)
}