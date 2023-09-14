import "./style.css";

import { useEffect, useState } from "react";

import { BsPersonCircle } from "react-icons/bs";

import axios from "axios";

import api from "../../api";




function CadastroEquipamento() {

  const [categoria, Setcategoria] = useState<string[]>(
    [
        "Categoria1",
        "Categoria2",
        "Categoria3"
    ]
  );

  const [select, setSelect] = useState<string>("");
  
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    axios.get("/equipamentos")
      .then((response) => {
        setEquipamentos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <>


     <main className="main_cadastro">   
        <h1>Novos equipamentos</h1>     

        <h2> Cadastrar novos equipamentos </h2> 

      <div className="cadastro_de_equipamentos">
        <form className="cad_formulario" method="POST">

            <div className="inputs1"> 

             <input placeholder="Modelo"  
             type="text" 
             id="campo-modelo" /> 

             <select
                 name=""
                 id="select-categoria"
                 onChange={(e) => setSelect(e.target.value)}
                 >
                <option selected disabled value="">Categoria</option>
                {
                  categoria.map((tech: any, index: number) => {
                  return <option key={index} value={tech}>{tech}</option>
                 })
                }
              </select>

              <input
              placeholder="Número de Série"
              type="text"
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
            <th>ID</th>
            <th>Modelo</th>
            <th>Fabricante</th>
            <th>Setor</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Watts</th>
            <tbody>

            </tbody>
          </tr>
        </thead>
            
          </table>
        </div>
      </div>
   
    </main>

    </>
  );
}

export default CadastroEquipamento 