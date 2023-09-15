import "./style.css";

import { useEffect, useState } from "react";

import { BsPersonCircle } from "react-icons/bs";

import axios from "axios";

import api from "../../api";



   function CadastroEquipamento() {

    const [categorias, setCategorias] = useState<string[]>(
      [
          "Categoria1",
          "Categoria2",
          "Categoria3"
      ]
      );

   const [ modelo, setModelo] = useState<string>("")
   const [ fabricante, setFabricante ] = useState<string>("")
   const [ ano, setAno ] = useState<string>("")
   const [ setor, setSetor] = useState<string>("")
   const [ consumo, setConsumo ] = useState<string>("")
   const [ preco, setPreco ] = useState<string>("")
   const [ serie, setSerie ] = useState<string>("")
  
   const [select, setSelect] = useState<string>(""); //equipamento selecionado
  
 
    function cadastrarEquipamento (event: any) {
      event.prevent.default();

     const formdata = new FormData ()

     formdata.append("modelo", modelo)
     formdata.append("fabricante", fabricante)
     formdata.append("ano", ano)
     formdata.append("setor", setor)
     formdata.append("consumo", consumo)
     formdata.append("preco", preco)
     formdata.append("serie", serie)
   }
 }
  
  const [equipamentos, setEquipamentos] = useState([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

  const formData = new FormData(event.target);
  }

  const [categoriaSelecionadas, setCategoriaSelecionadas] = useState<string[]>([]); 

  const [select, setSelect] = useState<string>(""); 


  function adicionarCategoria() {
   
    if (select === "") {
      
        alert("Selecione uma categoria para adicionar");
    } else {
       
        if (categoriaSelecionadas.includes(select)) {
            
            alert("Essa categoria já foi selecionada");
        }
        else {

            let novaCategoriaSelecionadas = [...categoriaSelecionadas];

            novaCategoriaSelecionadas.push(select);

           
            setCategoriaSelecionadas(novaCategoriaSelecionadas);
        }
    }
}


  return (
    <>


     <main className="main_cadastro">   
        <h1>Novos equipamentos</h1>     

        <h2> Cadastrar novos equipamentos </h2> 

      <div className="cadastro_de_equipamentos">
        <form onSubmit={cadastrarEquipamento} className="cad_formulario"  method="POST">

            <div className="inputs1"> 

             <input placeholder="Modelo"  
             type="text" 
             onChange={ (event) => { setModelo(event.target.value) } }
             id="campo-modelo" /> 

             <select
                 name=""
                 id="select-categoria"
                 onChange={(e) => setSelect(e.target.value)}
                 >
                <option selected disabled value="">Categoria</option>
                {
                  categoria.map((categoria: any, index: number) => {
                  return <option key={index} value={categoria}>{categoria}</option>
                 })
                }
              </select>

              <input
              placeholder="Número de Série"
              type="text"
              onChange={ (event) => { set(event.target.value) } }
              id="campo-numero_de_serie" />

            </div> 


            <div className="inputs2">
              
              
             <input placeholder="Fabricante" 
             type="text" 
             id="campo-fabricante" />

              <input placeholder="Consumo" 
              type="text" 
              id="campo-consumo" />

              <input placeholder="Setor" 
              type="text" 
              id="campo-setor" />

            </div>

           
            

          <div className="inputs3">

            <input
              placeholder="Ano de Fabricação"
              type="text"
              id="campo-ano_de_fabricação" />

              <input placeholder="Preço" 
              type="text" 
              id="campo-preço" />

              <button 
              type="submit">
              Confirmar
              </button>

          </div>
        </form>
      </div>
      
      <div className="maquinas_cadastradas">
        <h3>Máquinas Cadastradas</h3>
        <div className="tabela">
          <table>

          <thead>
          <tr>
           
            <th>Modelo</th>
            <th>Fabricante</th>
            <th>Setor</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Watts</th>
            <tbody>
          {equipamentos.map((equipamento: any) => (
            <tr key={equipamento.modelo}>
              <td>{equipamento.fabricante}</td>
              <td>{equipamento.setor}</td>
              <td>{equipamento.data}</td>
              <td>{equipamento.valor}</td>
              <td>{equipamento.watts}</td>
                <button onClick={() => (equipamento.id)}>
                  Editar
                </button>
              </tr>
            
          ))}
        </tbody>

        </thead>
            
          </table>
        </div>
      </div>
   
    </main>

    </>
  );
}

export default CadastroEquipamento 