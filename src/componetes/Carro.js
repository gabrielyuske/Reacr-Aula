import React from "react"

export default class Carro extends React.Component {

    constructor(props) {
        super(props);
        this.modelo = "Golf"
        this.state = {
            ligado: false,
            velAtual: 0,
        }
        this.ld=this.ligarDesligar.bind(this)
    }

    ligarDesligar() {
        //this.state.ligado=true
        //PRA RENDERIZAR PRECISAMOS CHAMAR O SETSTATE
        //this.setState({ligado: !this.state.ligado})
        this.setState(
            (state)=> (
                {ligado:!state.ligado}
            )
        )
        // this.state(
        //     function(state) {
        //         return{
        //             ligado:!state.ligado}
        //         }
        // )
    }

    acelerar(){
        this.setState(
            (state,props)=>
            ({velAtual:state.velAtual + props.fator})
        )
    }

    componentDidMount() {
        console.log("React")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("atualizado")
    }

    // acelerar(){
    //     this.setState(
    //         (state,props)=>
    //             ({velAtual:this.state.velAtual + this.props.fator})
    //     )
    // }

    render() {
        return (
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "SIM" : "NAO"}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>{this.state.ligado ? "Desligar Carro" : "Ligar Carro"}</button>
                <button onClick={() => this.acelerar()}>Acelerar</button>


            </div>

        )

    }
}
