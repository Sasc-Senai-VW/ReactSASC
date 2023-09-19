import React from 'react'
import './style.css'
import { useState } from 'react';
import api from '../../utils/api';
import { useEffect } from 'react';



export default function ModalEquipamento({isOpen, setModalEquipamentoFechado}) {

        const [id, setId ] = useState<string>('')
        const [modelo, setModelo ] = useState<string>('')
        const [valor, setValor] = useState<string>('')
        const [data, setData ] = useState<any>('')
        const [select, setSelect] = useState<string>(""); // state que contém a opção de tipo de usuario selecionado

        // verificar o que tem dentro do input de arquivo
        // pega tudo que acontece dentro de algo ex: input


    function cadastrarEquipamento (event: any) {
        event.preventDefault();

        const formData = new FormData ()

        formData.append('id', id) // 
        formData.append('modelo', modelo) 
        formData.append('valor', valor) 
        formData.append('data', data) 
        formData.append('tipo_user', select) 

        api.post('users', formData).then( (response) => {
            console.log(response)
            alert('Usuario cadastrado com sucesso!')
            // Navegaçao para login // catch serve para pegar o erro
        }).catch((error) => {
            console.log(error)
            alert('Algo está errado')

        })

    }

if (isOpen) {
    return (
        <main className="main_cadastro">
            <div className="container_cad">
                <div className="cad_conteudo">
                <div className='botaoFechar' onClick={setModalEquipamentoFechado}>X</div>
                    <h1>Cadastro</h1>
                    <form onSubmit={ cadastrarEquipamento } className="cad_formulario" method="POST">
                        <div className="cad_box_input">
                            <label htmlFor="id">Id:</label>
                            <input
                                type="text"
                                id="id"
                                onChange={ (event) => { setId(event.target.value) } } // pega o valor digitado e coloca como um valor
                                placeholder="Digite aqui o id:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="modelo">Modelo:</label>
                            <input
                                type="text"
                                id="modelo"
                                onChange={ (event) => { setModelo(event.target.value) } }
                                placeholder="Digite aqui o modelo:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="valor">valor:</label>
                            <input
                                type="text"
                                id="valor"
                                onChange={ (event) => { setValor(event.target.value) } }
                                placeholder="Digite aqui o valor:"
                                required
                            />
                        </div>

                        <div className="cad_box_input">
                            <label htmlFor="data">data:</label>
                            <input
                                type="text"
                                id="data"
                                onChange={ (event) => { setData(event.target.value) } }
                                placeholder="Digite aqui a data:"
                                required
                            />
                        </div>
                        
                        <div className="cad_linha_select">
                        <label htmlFor="categoria">Tipo de categoria:</label>
                                            <select
                                                name=""
                                                id="cad_select_skill"
                                                onChange={(e) => setSelect(e.target.value)}
                                            >
                                                <option selected disabled value="">Selecione</option>
                                                <option value="categoria">categoria1</option>
                                                <option value="categoria">categoria2</option>
                                                <option value="categoria">categoria3</option>

                                            </select>
                                                                                    
                        </div>

                        <div className="cad_box_input">
                            {/* Passar primeiro como exemplo */}
                            <input 
                            value='Cadastrar'
                            className='enviarCadastro'
                            type="submit"
                            />
                        </div>   
                     </form>
                </div>
            </div>
        </main>
      )
}
return null

}
