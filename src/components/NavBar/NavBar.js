import logo from '../NavBar/logoendoscopia.png'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from  'react-router-dom';



const NavBar =()=>{
    return (
        <div className="NavBar">

            <div className="Logo">
                
                <Link to='/'><img src={logo} width={'200px'} alt="logo de la tienda"/></Link>
            </div>

            <div className="TituloyNavbar">
            <div className="Tituloheader">
            <h3>Insumos de Endoscopia Digestiva</h3>
            </div>

            <nav >
                <ul className="Listanavegacion" >
                    
                    <li>
                    <NavLink className={({isActive})=>isActive ? "claseActive":"claseInactive" } to='/'> Catálogo</NavLink> 
                    </li>

                    <li>
                    <NavLink className={({isActive})=>isActive ? "claseActive":"claseInactive" } to='/catalogo/insumos'> Insumos</NavLink> 
                    </li>

                    <li>
                    <NavLink className={({isActive})=>isActive ? "claseActive":"claseInactive" } to='/catalogo/endoscopios'> Endoscopios</NavLink> 
                    </li>
                
                </ul>
            </nav>
            </div>

            <CartWidget/>
        
        </div>

    )

}

export default NavBar;