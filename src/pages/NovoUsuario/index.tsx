import { useState } from "react";
import "./style.newuser.css";
import Modal from "../../components/Modal/modal";

export default NovoUsuario;

function NovoUsuario() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div id="divnewuser">
      <main className="novoUsuarioMain" id="newuser">
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
                <button onClick={() => setModalAberto(true)}>
                  Cadastrar usuário
                </button>
              </div>
              <Modal
                isOpen={modalAberto}
                setModalFechado={() => setModalAberto(!setModalAberto)}
              />
              {/*Botões / Senha - Confirme a Senha */}
              <div className="section_2"></div>

              {/*Ultimo Acesso*/}
              <div className="ultimo_acesso">
                <hr />
                <p>Usuários cadastrados:</p>
              </div>

              {/*Tabela*/}
              <section className="tabela_container">
                <table>
                  <tbody>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Categoria</th>
                    </tr>
                    <tr className="linha_impar">
                      <td>Lorem123</td>
                      <td>email@email.com</td>
                      <td>Comum</td>
                    </tr>
                    <tr className="linha_par">
                      <td>Lorem123</td>
                      <td>email@email.com</td>
                      <td>Administrador</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
