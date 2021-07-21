import React,{useState,useEffect} from 'react';
import './App.css';
//import Logo from "./componetes/imgs/logo.png"
//import Eu from "../public/img/main.png"
// import Header from "./componetes/Header"
// import Corpo from "./componetes/Corpo"
// import Dados from "./componetes/Dados"
import Relogio from "./componetes/Relogio"
import Numero from "./componetes/Numero"
import Led from "./componetes/Led"
import Nota from "./componetes/Nota"
import Resultado from "./componetes/Resultado"
import Caixa from "./componetes/Caixa"
import Classe from "./componetes/Classe"
import Carro from "./componetes/Carro"
import Globais from "./componetes/Globais"
import Info from "./componetes/Info"



export default function App(){
    // const canal2= ()=>{
    //     return ("CFB Curso")
    // }
    // const canal ="CFB Cursos"
    // const curso ="Curso de React"
    const textDestaque={
        color:"#00f",
        fontSize:"2em"
    }
    const cumprimento=()=>{
        const hora=new Date().getHours()
        //const hora=20
        if (hora >=0 && hora < 13){
            return <p>Bom dia</p>
        }else if (hora >=13 && hora < 18){
            return<p>Boa tarde</p>
        }else{
            return <p>Boa noite</p>
        }
    }
    const msglogin=()=>{
        return "Usuario Logado"
    }
    const msglogoff=()=>{
        return "Favor Logar"
    }

    const retCor=(c)=>{
        if(c===1){
            return vermelho
        }else if (c===2){
            return verde
        }else{
            return azul
        }
    }

    const mudaCor=()=>{
        setCor(cor+1)
        if(cor > 2){
            setCor(1)
        }
    }
    //Lista normal
    const carros=["HRV","Golf","Focus","Cruze","Argo"]

    //Lista JSON
    const cars=[
        {categoria: "Esporte", preco: "1100",modelo:"Golf GTI"},
        {categoria: "Esporte", preco: "1200",modelo:"Camaro"},
        {categoria: "SUV", preco: "850",modelo:"HRV"},
        {categoria: "SUV", preco: "830",modelo:"T-Cross"},
        {categoria: "Utilitario", preco: "1200",modelo:"Hillux"},
        {categoria: "Utilitario", preco: "900",modelo:"Ranger"},
    ];


    // Listando o conteudo de Lista
    const listaCarros=carros.map(
        (c,i)=>
            <li key={i}>{i} - {c}</li>
    )

    const listaCars=cars.map(
        (c,i)=>
            <li key={i}>{i} - {c.categoria} Valor:{c.preco} {c.modelo}</li>
    )

    const handlFormChange=(e)=>{
        if(e.target.getAttribute("name")==="fnome"){
            setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
        }else if(e.target.getAttribute("name")==="fcurso"){
            setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
        }else if(e.target.getAttribute("name")==="fano"){
            setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
        }

    }

    const handleSetNotas=(e)=>{
        if(e.target.getAttribute("name")==="nota1"){
            setNotas({"nota1":e.target.value,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":notas.nota4})
        }else if(e.target.getAttribute("name")==="nota2"){
            setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3,"nota4":notas.nota4})
        }else if(e.target.getAttribute("name")==="nota3"){
            setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value,"nota4":notas.nota4})
        }else if(e.target.getAttribute("name")==="nota4"){
            setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":e.target.value})
        }
    }

    // useEffect(
    //     ()=>{
    //         console.log("Pagina Carregada")
    //         document.title="Contagem:"+contagem
    //     }
    // )

    const armazenar=(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }
    const consultar=(chave)=>{
        alert(localStorage.getItem(chave))
    }
    const apagar=(chave)=>{
        localStorage.removeItem(chave)
    }


    // localStorage.setItem("nome","Gabriel")
    // localStorage.getItem("nome")

    //setInterval(mudaCor,1000)

    const [log,setLog] = useState(false)
    const [num,setNum] = useState(10)
    const [ligado,setLigado] = useState(false)
    const [cor,setCor] = useState(1)
    const [nome,setNome] = useState("")
    const [carro,setCarro] = useState("HRV")
    const [form,setForm] = useState({"nome":"","curso":"","ano":""})
    const [notas,setNotas] = useState({"nota1":"0","nota2":"0","nota3":"0","nota4":"0"})
    const [contagem,setContagem] = useState(0)
    const [lnome,lsetNome] = useState()


    const vermelho ={color:"#f00"}
    const verde ={color:"#0f0"}
    const azul ={color:"#00f"}

    return(
        <>
            <section className="caixa">
                <Relogio/>

                <p>{"Canal: " + Globais.canal}</p>
                <p>{"Curso: " + Globais.curso}</p>
                <p>{"Ano: " + Globais.ano}</p>
                ------
                <Info/>

                <Carro fator={1}/>

                <h1> Componentes de classes</h1>
                <Classe canal="Cursos de React" curso="Reacts"/>

                <p>Contagem:{contagem}</p>
                <button onClick={()=>setContagem(contagem+1)}>Contar</button><br/>

                <label> Digite um nome</label>
                <input type="text" value={lnome} onChange={(e)=>lsetNome(e.target.value)}/><br/>
                <button onClick={()=>armazenar("ls_nome",lnome)}>Salvar nome</button><br/>
                <button onClick={()=>consultar("ls_nome",lnome)}>Consultar nome</button><br/>
                <button onClick={()=>apagar("ls_nome")}>Apagar nome</button><br/>

                <Caixa>
                    <Led/>
                    <h1> Curso Do Youtube </h1>
                    <p> Aula de React </p>
                </Caixa>

                <Nota num={1} nome={"nota1"} nota={notas.nota1} setNota={handleSetNotas}/>
                <Nota num={2} nome={"nota2"} nota={notas.nota2} setNota={handleSetNotas}/>
                <Nota num={3} nome={"nota3"} nota={notas.nota3} setNota={handleSetNotas}/>
                <Nota num={4} nome={"nota4"} nota={notas.nota4} setNota={handleSetNotas}/>
                <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>

                <Numero num = {num} setNum={setNum}/>

                <h1>Um state para todos os Form</h1>
                <label>Nome</label>
                <input type="text" name="fnome" value={form.nome} onChange={(e)=>handlFormChange(e)}/><br/>
                <label>Curso</label>
                <input type="text" name="fcurso" value={form.curso} onChange={(e)=>handlFormChange(e)}/><br/>
                <label>Ano</label>
                <input type="text" name="fano" value={form.ano} onChange={(e)=>handlFormChange(e)}/><br/>
                <p>Nome digitado: {form.nome}</p>
                <p>Curso digitado: {form.curso}</p>
                <p>Ano digitado: {form.ano}</p>

                <label>Digite seu Nome</label>
                <input
                    type="text"
                    name="fnome"
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)}
                />
                <p>Nome digitado: {nome}</p>

                <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                    <option value="HRV">HRV</option>
                    <option value="Golf">Golf</option>
                    <option value="Cruze">Cruze</option>
                    <option value="Argo">Argo</option>
                </select>
                <p>Carro selecionado: {carro}</p>

                <h1>Lista normal</h1>
                {listaCarros}

                <h1>Lista com Json</h1>
                {listaCars}

                {/*State*/}
                <h1 style={retCor(cor)}>React Cursos</h1>
                <button onClick={()=>mudaCor()}>Mudar Cor</button>

                {/* log?True:False  */}
                <p>{log?msglogin():msglogoff()}</p>
                <button onClick={()=>setLog(!log)}>{log?"Logoff":"Login"}</button>
                {cumprimento()}
                {/*<Led/>*/}
                {/*EXEMPLO de baixo e quando o filho esta Recebendo atributos do Pai*/}
                <Led ligado={ligado} setLigado={setLigado}/>

                <h1 style={{color:"#f00",fontSize:"3em"}}>Gabriel yuske sato</h1>
                <h2 style={textDestaque}>Cursos de React</h2>
                <p className="texto">Se inscreva em nosso canal e nos siga no instagram</p>
                <a href="https://www.youtube.com/watch?v=zhP0EoBbfuc&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=8" target="_blank">Link:CFB Cursos</a>

            </section>
        </>
    )
}

