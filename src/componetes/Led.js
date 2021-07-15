import React from "react"
// import React ,{useState} from "react"
import LedVerde from "./imgs/green_buttons.png"
import LedVermelho from "./imgs/red_buttons.png"



export default function Led(props){
    // const [ligado,setLigado]=useState(false)
    return(
        <>
            {/*<img style={{width:"50px"}} src={ligado?LedVerde:LedVermelho } alt="LED IMAGE"/>*/}
            {/*<button onClick={()=>setLigado(!ligado)}>{ligado?"Desligar":"Ligar"}</button>*/}

            <img style={{width:"50px"}} src={props.ligado?LedVerde:LedVermelho } alt="LED IMAGE"/>
            <button
                onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?"Desligar":"Ligar"}
            </button>

        </>
    );
}
