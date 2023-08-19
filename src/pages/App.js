
import './App.scss';
import { useState } from 'react';

function App() {
  const [ nome, setNome]= useState('')
  const [ chamada, setChamada]= useState('')
  const [ alunos, setAlunos]= useState([])
  const [ mostrar, setMostrar]= useState(true)







  function Add(){
      let aluno= {
        nome: nome,
        chamada: chamada
      }

      setAlunos([...alunos,aluno])
  }

  function M(){
      setMostrar(!mostrar)
  }

  function Excluir(itemExcluir){
    let novos= alunos.filter( item => item.chamada != itemExcluir.chamada);
    setAlunos(novos)
  }


  return (
    <div className="App">
        







      <div className='center'>
          <h1>Lista de alunos <button id='menos' onClick={M}> {mostrar ? '-' : '+'}</button></h1>


          {mostrar == true &&
              <>
              <div className='s1'>
                <label>Nome:</label>
                <input type='text' value={nome}  placeholder='Insira o nome do aluno'    onChange={e => setNome(e.target.value)} />
                <label>Chamada:</label>
                <input type='text' value={chamada}  placeholder='Insira o número da chamada'    onChange={e => setChamada(Number(e.target.value))} />
                <button onClick={Add}> Adicionar </button>
              </div>


              <div className='tabela'>
              <table>
                <thead>
                  <tr>
                    <th> Nome</th>
                    <th> Chamada</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>

                  {alunos.map(item =>
                    
                  <tr>
                    <td>{item.nome}</td>
                    <td>{item.chamada}</td>
                    <td><button  id='lixo' onClick={() => Excluir(item)}>  <img src='/assets/images/lixo.png' alt=''/></button></td>
                  </tr>
                    
                    )}
                  
                </tbody>
              </table>
            </div>
              </>
          
          }



            
  


      </div>




    </div>
  );
}

export default App;
