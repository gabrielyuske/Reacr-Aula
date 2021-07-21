import React from 'react';

export default function TabelaIMC(){

        return(
            <table border="1" style={{borderCollapse:"collapse"}}>
                <tread>
                    <tr>
                        <th>
                            Classificacao
                        </th>
                        <th>
                            IMC
                        </th>
                    </tr>
                </tread>
                <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr><tr>
                    <td>Abaixo Normal</td>
                    <td>Entre de 18,5 e 24,9</td>
                </tr><tr>
                    <td>Sobrepeso</td>
                    <td>Entre de 25 e 29,9</td>
                </tr><tr>
                    <td>Obesidade Grau 1</td>
                    <td>Entre de 30 e 34,9</td>
                </tr><tr>
                    <td>Obesidade Grau 2</td>
                    <td>Entre de 35 e 39,9</td>
                </tr><tr>
                    <td>Obesidade Grau 3</td>
                    <td>Maior que 40</td>
                </tr>
                </tbody>
            </table>
        )

}