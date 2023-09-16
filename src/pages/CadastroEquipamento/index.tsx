import "./style.css";

import { useEffect, useState } from "react";

import axios from "axios";



function CadastroEquipamento() {

  const [categorias, setCategorias] = useState<string[]>(
    [
        "Categoria1",
        "Categoria2",
        "Categoria3"
    ]
);
  const [select, setSelect] = useState<string>("");

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string[]>([]); 


  const [id, setId] = useState<string>("");
  const [modelo, setModelo] = useState<string>("")
  const [data, setData] = useState<string>("")
  const [fabricante, setFabricante] = useState<string>("")
  const [valor, setValor] = useState<string>("")
  const [consumo, setConsumo] = useState<string>("")

  function cadastrarEquipamentos(event: any) {

    event.preventDefault(); //é para manter as informações no campo, após o submit

    const formData = new FormData() //trata arquivos de forma intuitiva, no caso de imagens

    formData.append("id", id) //tudo que for append é adicionar
    formData.append("modelo", modelo)
    formData.append("data", data)
    formData.append("fabricante", fabricante)
    formData.append("valor", valor)
    formData.append("consumo", consumo)

    formData.append("categoria", JSON.stringify(setCategoriaSelecionada))

    api.post("http://localhost:3000", formData).then((response) => { 
      console.log(response)
      alert("Equipamento criado com sucesso! ")

    }).catch((error) => {
      console.log(error)
    })
  }

return (
  <>


    <main className="main_cadastro">
      <h1>Novos equipamentos</h1>

      <h2> Cadastrar novos equipamentos </h2>

      <div className="cadastro_de_equipamentos">
        <form onSubmit={cadastrarEquipamentos} className="cad_formulario" method="POST">

          <div className="inputs1">

            <input placeholder="ID"
              type="text"
              onChange={(event) => { setId(event.target.value) }}
              id="campo-ID" />

            <select
              name=""
              id="select-categoria"
              onChange={(e) => setSelect(e.target.value)}
            >
              <option selected disabled value="">Categoria</option>
              {
                categorias.map((categoria: any, index: number) => {
                  return <option key={index} value={categoria}>{categoria}</option>
                })
              }
            </select>

           
          </div>


          <div className="inputs2">


            <input placeholder="Fabricante"
              type="text"
              onChange={(event) => { setFabricante(event.target.value) }}
              id="campo-fabricante" />

            <input placeholder="Data"
              type="text"
              onChange={(event) => { setData(event.target.value) }}
              id="campo-data" />

            

          </div>




          <div className="inputs3">

          <input placeholder="Consumo"
              type="text"
              onChange={(event) => { setConsumo(event.target.value) }}
              id="campo-consumo" />

               <input
              placeholder="Modelo"
              type="text"
              onChange={(event) => { setModelo(event.target.value) }}
              id="campo-modelo" />
          </div>

          
            <button
              type="submit">
              Confirmar
            </button>
        </form>
      </div>

      <div className="maquinas_cadastradas">
        <h3>Máquinas Cadastradas</h3>
        <div className="tabela">
          <table>



          </table>
        </div>
      </div>

    </main>

  </>
);
}


export default CadastroEquipamento