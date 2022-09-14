import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import '../CartContainer/CartContainer.css';

const CartContainer =()=>{
    const {productCartList, removeItem, clear} = useContext(CartContext)
    return (
        <div>

            <div className="CartGlobal">
                {productCartList.map(item=>(
                    <>
                    <p>{item.name} - {item.quantity} </p>
                    <button className="ButtonCart" onClick={()=>removeItem(item.id)}>eliminar producto</button>
                    </>
                ))

                }
                
                {productCartList.length?(
                    <>
                  <button className="ButtonCart" onClick={()=>clear()}>eliminar todos los productos</button> 
                  </> 
                ):("") }
                


            </div>

        </div>

    )

}

export default CartContainer;