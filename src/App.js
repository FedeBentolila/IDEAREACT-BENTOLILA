
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from  'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      
      <Routes>
      <Route path="/" element={<ItemListContainer /> }/>
      <Route path="/catalogo" element={<ItemListContainer /> }/>
      <Route path="/catalogo/:categoryId" element={<ItemListContainer /> }/>
      <Route path="/product/:productId" element={<ItemDetailContainer /> }/>
      
      
      
      
      </Routes> 

    </div>
    </BrowserRouter>
  );
}

export default App;
