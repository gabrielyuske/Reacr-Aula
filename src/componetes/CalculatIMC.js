import React from 'react';

export default class CalcularIMC extends React.Component{
    constructor() {
        super();
        // com o bind fazemos a conecao
        this.calc=this.fcalc.bind(this)
    }

    fcalc=()=>{

        const r=this.props.p/(this.props.a * this.props.a)
        this.props.sr(r)
        console.log(r)
    }
    render() {
        return(
            <div>
                <button onClick={this.calc}>Calcular</button>
            </div>

        )
    }
}