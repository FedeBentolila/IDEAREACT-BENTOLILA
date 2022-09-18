import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import '../CartContainer/CartContainer.css';
import trash from '../CartContainer/trash.jpg'

const CartContainer =()=>{
    const {productCartList, removeItem, clear} = useContext(CartContext)

    const getTotalPrice=()=>{
        const finaltotalprice= productCartList.reduce((acc, item)=> acc + item.totalprice,0);
        return finaltotalprice;

    }

    return (
        <div>

            <div className="CartGlobal">
                {productCartList.map(item=>(
                    <div className="Item">
                        <img src={item.thumbnail} width={'100px'} alt={item.name}/>   
                        <p>{item.name}</p>
                        <p>Cantidad:{item.quantity} </p>
                        <p>Precio unitario:{item.price} </p>
                        <p>Precio total: {item.price*item.quantity} </p>
                        <img className="trash" src={trash} onClick={()=>removeItem(item.id)} width={'40px'} alt="eliminar producto"></img>
                    </div>
                ))

                }
                
                {productCartList.length?(
                    <>
                       
                    <button className="ButtonCart" onClick={()=>clear()}>Eliminar todo</button>
                    
                   

                    <p className="Finalcompra"> Total de la compra: {getTotalPrice()}   </p>
                    
                    </> 
                    
                ):("") }
                


            </div>

        </div>

    )

}

export default CartContainer;