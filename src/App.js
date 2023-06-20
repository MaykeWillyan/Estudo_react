import './App.css';
import HelloWorld from './components/HelloWorld'; //importando componente
function App() { //criando codigo js

  const name = 'mayke'
  const url = 'https://fakeimg.pl/600x400/'

  return ( 
    //codigo html 
    //{para coisas em js no html}
    <div className="App">
      <p> Olá, {name}</p>
      <img src={url} alt='nagas'/>
      
      <HelloWorld/>
    </div>
  )
}

export default App;
