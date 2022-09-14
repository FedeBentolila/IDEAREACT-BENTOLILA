import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer =()=>{
    const {productCartList, removeItem, clear} = useContext(CartContext)
    return (
        <div>

            <div>
                {productCartList.map(item=>(
                    <>
                    <p>{item.name} - {item.quantity} </p>
                    <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                    </>
                ))

                }
                <>
                {productCartList.length?(
                  <button onClick={()=>clear()}>eliminar todos los productos</button>  
                ):("") }
                </>


            </div>

        </div>

    )

}

export default CartContainer;