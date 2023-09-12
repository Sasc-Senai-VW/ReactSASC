import "./style.css";

import { useState } from "react";

 function Configuracoes() {

  const [categoria, Setcategoria] = useState<string[]>(
    [
        "Administrador",
        "Comum"
    ]
  );

  const [select, setSelect] = useState<string>(""); 


  return (

    

    <>

        <main className="main_configuracoes">   

        <h1>Configurações</h1>     

        <h2>Configurações de Perfil</h2> 



        <div className="inputs"> 

             <input placeholder="Usuario"  
             type="text" 
             id="campo-usuario" /> 

             <select
                 name=""
                 id="select-user"
                 onChange={(e) => setSelect(e.target.value)}
                 >
                <option selected disabled value="">Categoria</option>
                {
                  categoria.map((tech: any, index: number) => {
                  return <option key={index} value={tech}>{tech}</option>
                 })
                }
              </select>

              <input placeholder="Senha"  
             type="password" 
             id="campo-senha" /> 

             <input placeholder="Confirmar senha"  
             type="password" 
             id="campo-confirmar-senha" />          

            </div>

            <div className="buttons">

           

            <button className="button1"
              type="submit">
              Confirmar
              </button>

              <button className="button2"
              type="submit">
              Cancelar
              </button>

              </div>




       

        
        </main>



    
      
    </>
  );
}

export default Configuracoes