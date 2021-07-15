import React from "react"

export default function Caixa(props){
    return(
        <>
            {/*MOSTRAR TODO O CONTEUDO*/}
            {props.children}
            {/*MOSTRAR CONTEUDO SEPARADO*/}
            {props.children[0]}
            {props.children[1]}

        </>
    )
}