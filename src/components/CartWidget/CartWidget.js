import iconocart from '../CartWidget/carticon.png'
import { Link } from 'react-router-dom';

const CartWidget =()=>{
    return (
        <div className="CartWidget">
            <Link to="/cart" className="IconoCart">
           
            <img src={iconocart} width={'100px'} alt="Icono del carrito"/>
            
            </Link>

        </div>

    )

}

export default CartWidget;