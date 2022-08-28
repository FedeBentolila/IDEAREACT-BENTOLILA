
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <ItemListContainer greeting="Bienvenidos a la tienda de insumos para endoscopía digestiva"/>  

    </div>
  );
}

export default App;
