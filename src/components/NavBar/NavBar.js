import logo from '../NavBar/logoendoscopia.png'
import './NavBar.css';


const NavBar =()=>{
    return (
        <div className="NavBar">

            <div className="Logo">
            <img src={logo} width={'200px'} alt="logo"/>
            </div>

            <div className="Tituloheader">
            <h3>Insumos de Endoscopia Digestiva</h3>
            </div>

            <div >
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
            </div>
        
        </div>

    )

}

export default NavBar;