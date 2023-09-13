import { useState } from "react";
import './style.css'
import imgPerfil from '../../assets/img/ImgPerfil.png'
import edit2 from '../../assets/img/edit2.png'
import trash from '../../assets/img/trash.png'
import api from "../../utils/api";


export default NovoUsuario; 

function NovoUsuario() {

  //state para pegar tipo de adm
  const [Categoria, setCategoria] = useState<string[]>(
      [
          "Administrador",
          "Comum"
      ]
  );
 
  
// para pegar valores

const [usuario, setUsuario ] = useState<string>('')
const [senha, setSenha ] = useState<string>('')
const [senhaConfirm, setConfirm ] = useState<any>('')
const [foto, setFoto ] = useState<any>('')

// const [admSelecionado, admSelecionado] = useState<string[]>([]); // Array (lista) para armazenar o tipo de adm

const [select, setSelect] = useState<string>(""); // state que contém a opção de adm selecionada pelo usuário

function verificarCampoUpload( event: any) {
  setFoto(event.target.files[0])
}


function cadastrarUsuario (event: any) {
  event.preventDefault();

  const formData = new FormData ()

  formData.append('nome', usuario) // 
  formData.append('password', senha)
  formData.append('password', senhaConfirm) 
  formData.append('user_img', foto) 


  // formData.append('hardSkills', JSON.stringify(''))
}

  api.post('users').then( (response) => {
    console.log(response)
    alert('Usuario cadastrado com sucesso!')
    // Navegaçao para login // catch serve para pegar o erro
}).catch((error) => {
    console.log(error)
    alert('Algo está errado')

})




 
return(

<main>

    <section className="equipamentos">
      {/*Conteudo Novo usuario*/}
      <section className="Container_usuario">
        <div className="Controle_usuario">
          {/*Novo Usuário*/}
          <div className="novo_usuario">
            <p>Novo Usuário</p>
            <hr />
          </div>

          <form onSubmit={ cadastrarUsuario } method="POST">
          {/*Botões / Usuario - Tipo de conta - Enviar */}
          <div className="section_1">
            <input
             type="text"
             onChange={ (event) => { setUsuario(event.target.value) } } // pega o valor digitado e coloca como um valor
              placeholder="Usuário" 
              />
            <select
             name="Categoria" 
             id="Categoria"
             onChange={(e) => setSelect(e.target.value)}
             >
              <option selected value="DEFAULT" disabled>Categoria</option>
              {
                Categoria.map((Categoria: any, index: number) => {
                  return <option key={index} value={Categoria}>{Categoria} 
                  </option>
                })
              }
            </select>
            <button type="submit">Confirmar</button>
          </div>
          {/*Botões / Senha - Confirme a Senha */}
          <div className="section_2">
            <input 
            className="input_senha"
             type="password" 
             onChange={ (event) => { setSenha(event.target.value) } } // pega o valor digitado e coloca como um valor
             placeholder="Senha" />
            <input
              className="input_confirmeasenha"
              type="password"
              onChange={ (event) => { setConfirm(event.target.value) } } // pega o valor digitado e coloca como um valor
              placeholder="Confirme a senha"
            />
          </div>
          {/*Icone / Foto */}
          <div className="foto">
            <img src={imgPerfil} />
            <input
            className="inputFoto"
              type="file"
              id="foto"
              onChange={ verificarCampoUpload } // vai atualizar quando alterar valor do input
              required
            />
            
          </div>
          
          {/*Ultimo Acesso*/}
          <div className="ultimo_acesso">
            <p>Ultimo acesso:</p>
            <hr />
          </div>


          {/*Tabela*/}
          <section className="tabela_container">
            <table>
              <tbody>
                <tr>
                  <th>Usuário</th>
                  <th>Categoria</th>
                  <th>Senha</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
                <tr className="linha_impar">
                  <td>2023004</td>
                  <td>Lorem</td>
                  <td>2015</td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src={edit2} />
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src={trash} />
                      Excluir
                    </button>
                  </td>
                </tr>
                <tr className="linha_par">
                  <td>2023004</td>
                  <td>Lorem</td>
                  <td>2015</td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src={edit2}/>
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src={trash}/>
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          </form>
        </div>
      </section>
    </section>
  </main>
  )
}

