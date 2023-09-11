import "./style.css";

import { useState } from "react";

import { BsPersonCircle } from "react-icons/bs";




function CadastroEquipamento() {

  const [categoria, Setcategoria] = useState<string[]>(
    [
        "Categoria1",
        "Categoria2",
        "Categoria3"
    ]
  );

  const [select, setSelect] = useState<string>(""); 


    




  return (
    <>


     <main className="main_cadastro">   
        <h1>Novos equipamentos</h1>     

        <h2> Cadastrar novos equipamentos </h2> 

        <div className="icon_user">
          <BsPersonCircle /> 
        </div>

       
        
        

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
            <tbody>
              <tr>
                <th>Codigo:1</th>
                <td>Modelo 1</td>
                <td>Fabricante 1</td>
                <td>Categoria 1</td>
                <td>Setor 1</td>
                <td>00/00/00</td>
                <td>R$9,999</td>
                <td>
                  1,200 watts/Hr <button>Alterar</button>{" "}
                </td>
              </tr>
              <tr>
                <th>Codigo:2</th>
                <td>Modelo 2</td>
                <td>Fabricante 2</td>
                <td>Categoria 2</td>
                <td>Setor 2</td>
                <td>00/00/00</td>
                <td>R$9,999</td>
                <td>
                  1,200 watts/Hr <button>Alterar</button>{" "}
                </td>
              </tr>
              <tr>
                <th>Codigo:3</th>
                <td>Modelo 3</td>
                <td>Fabricante 3</td>
                <td>Categoria 3</td>
                <td>Setor 3</td>
                <td>00/00/00</td>
                <td>R$9,999</td>
                <td>
                  1,200 watts/Hr <button>Alterar</button>{" "}
                </td>
              </tr>
              <tr>
                <th>Codigo:4</th>
                <td>Modelo 4</td>
                <td>Fabricante 4</td>
                <td>Categoria 4</td>
                <td>Setor 4</td>
                <td>00/00/00</td>
                <td>R$9,999</td>
                <td>
                  1,200 watts/Hr <button>Alterar</button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
   
    </main>

    </>
  );
}

export default CadastroEquipamento 