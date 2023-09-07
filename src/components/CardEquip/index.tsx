import '../style.css'

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
                            <td className='id'>{props.id}</td>
                            <td className='modelo'>{props.modelo}</td>
                            <td className='fabricante'>{props.fabricante}</td>
                            <td className='data'>{props.data}</td>
                            <td className='consumo'>{props.consumo}(kWh)</td>
                            <td className='valor'>R$ {props.valor}</td>
                            

                        </tr>
{/* 
                        <tr className="linhaPar">
                            <td className='id2'>{props.id}</td>
                            <td className='modelo2'>{props.modelo}</td>
                            <td className='fabricante2'>{props.fabricante}</td>
                            <td className='data2'>{props.data}</td>
                            <td className='consumo2'>{props.consumo}(kWh)</td>
                            <td className='valor2'>R$ {props.valor}</td>

                        </tr> */}
                    </tbody>
        </>
    )
} 	
