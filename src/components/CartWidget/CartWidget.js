import iconocart from '../CartWidget/carticon.png'
import { Link } from 'react-router-dom';
import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import '../CartWidget/CartWidget.css';

const CartWidget =()=>{

    const {productCartList} = useContext(CartContext)

    const getTotalQuantity=()=>{
        const finaltotalquantity= productCartList.reduce((acc, item)=> acc + item.quantity,0);
        return finaltotalquantity;

    }

    return (
        <div className="CartWidget">
            <Link to="/cart" className="IconoCart">
           
            <img src={iconocart} width={'100px'} alt="Icono del carrito"/>
            
            </Link>

            {productCartList.length?(
                    <>
    
                    <p className="numeroItems">  {getTotalQuantity()}   </p>
                    
                    </> 
                    
                ):(
                    <>
                   
                    </>

                ) }


        </div>

    )

}

export default CartWidget;