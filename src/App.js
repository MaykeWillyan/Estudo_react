import './App.css';
import HelloWorld from './components/HelloWorld'; //importando componente
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'

function App()
 { //criando codigo js

  return (
    //codigo html 
    //{para coisas em js no html}
    <div className="App">
      <h1>shalom</h1>
      <HelloWorld/>
      <SayMyName nome = 'Mikas'/>
      <SayMyName nome = 'lucas'/>
      <Pessoa nome = 'Mikas' idade = '18' profissao = 'fudido' foto = 'https://placehold.co/600x400'/>
      <List/>
    </div>
    
  )
}

export default App;
