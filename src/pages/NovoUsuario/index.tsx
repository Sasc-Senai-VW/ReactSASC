import { useState } from "react";
import './style.css'
import Modal from "../../components/Modal/modal";



export default NovoUsuario; 

function NovoUsuario() {

  const [modalAberto, setModalAberto] = useState(false)

return(

<main className="novoUsuarioMain">


    <section className="equipamentos">
      {/*Conteudo Novo usuario*/}
      <section className="Container_usuario">
        <div className="Controle_usuario">
          {/*Novo Usuário*/}
          <div className="novo_usuario">
            <p>Novo usuário</p>
            <hr />
          </div>
          {/*Botões / Usuario - Tipo de conta - Enviar */}
          <div className="section_1">
            <button onClick={() => setModalAberto (true)}>Novo usuário</button>
          </div>
          <Modal isOpen={modalAberto} setModalFechado={() => setModalAberto(!setModalAberto)} />
          {/*Botões / Senha - Confirme a Senha */}
          <div className="section_2">
          </div>
          
          {/*Ultimo Acesso*/}
          <div className="ultimo_acesso">
            <p>Usuários cadastrados:</p>
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
                </tr>
                <tr className="linha_impar">
                  <td>2023004</td>
                  <td>Lorem</td>
                  <td>2015</td>

                </tr>
                <tr className="linha_par">
                  <td>2023004</td>
                  <td>Lorem</td>
                  <td>2015</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </section>
  </main>
  )
}

