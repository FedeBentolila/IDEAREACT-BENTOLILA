
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <CartProvider>
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
      <Route path="/cart" element={<CartContainer /> }/>

      
      
      
      
      </Routes> 

    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
