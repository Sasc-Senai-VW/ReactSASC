import './style.css'

import api from '../../utils/api'

import Equipamento from '../../pages/Equipamento'

export default function CardEquipamento(props:any){

    function parseListaEquipamento () {
        if (typeof props.id === 'string') {
            return JSON.parse(props.id)
        } else {
            return props.id
        }
    }

   
    

    
    return(
        <>
                    <tbody>
                        <tr className="linhaTabela">
                            <td>{props.id}</td>
                            <td>{props.modelo}</td>
                            <td>R$ {props.valor}</td>
                            <td>{props.data}</td>
                            <td>{props.consumo}(kWh)</td>
                            <td>{props.fabricante}</td>
       

                        </tr>
                    </tbody>
        </>
    )
} 	
