import React from 'react';

export default class ResultadoIMC extends React.Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div>
                {/*toFixed === Quantas casas quer retornar*/}
                <p>Resultado:{this.props.r.toFixed(2)}</p>
            </div>

        )
    }

}