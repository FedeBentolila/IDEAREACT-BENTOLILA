import logo from '../NavBar/logoendoscopia.png'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar =()=>{
    return (
        <div className="NavBar">

            <div className="Logo">
            <img src={logo} width={'200px'} alt="logo de la tienda"/>
            </div>

            <div className="Tituloheader">
            <h3>Insumos de Endoscopia Digestiva</h3>
            </div>

            <nav >
                <ul className="Listanavegacion" >
                    <li>
                    <a href='#'> Inicio</a> 
                    </li>

                    <li>
                    <a href='#'> Productos</a> 
                    </li>

                     <li>
                    <a href='#'> Contacto</a> 
                    </li>
                
                </ul>
            </nav>

            <CartWidget/>
        
        </div>

    )

}

export default NavBar;