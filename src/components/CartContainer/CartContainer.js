import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "../../context/CartContext";
import '../CartContainer/CartContainer.css';
import trash from '../CartContainer/trash.jpg';
import { Link } from "react-router-dom";
import { db } from '../../utils/firebase';
import { collection, addDoc, getDocs, updateDoc, doc, getDoc, increment } from 'firebase/firestore';

const CartContainer =()=>{
    const {productCartList, removeItem, clear} = useContext(CartContext)

    const [Order, setOrder] = useState("");


    const getTotalPrice=()=>{
        const finaltotalprice= productCartList.reduce((acc, item)=> acc + item.totalprice,0);
        return finaltotalprice;

    }

    const sendOrder=(event)=>{
        event.preventDefault();

        const order ={
        
        buyer: {
            name: event.target[0].value,
            phone: event.target[1].value,
            email: event.target[2].value,

        },

        items: productCartList,
        total: getTotalPrice(),

    }

    const queryRef= collection(db, "orders");
    addDoc(queryRef, order).then(response=>{
        setOrder(response);

        
    });


    upDateStock()


    }

    const upDateStock=async ()=>{

        const query= collection(db, "Items");
        const response= await getDocs(query);
        const productos= response.docs.map(doc =>{
          const newProduct={
            ...doc.data(),
            id: doc.id
          }
          return newProduct
        }  )     
        
        const res = productCartList.filter(x => productos.some(y => y.id === x.id));

        const arrayproductoscompradosx = res.map(x => x)


        arrayproductoscompradosx.forEach(element => {
            const query2= doc(db, "Items", element.id);
            updateDoc(query2,{
                stock : increment(- element.quantity)
            })
        })

        clear()


    }



    return (
        <div>

            <div className="CartGlobal">


            {Order && 
            
            <div className="Orden">
                <p>Su orden fue creada, con el siguiente número de referencia {Order.id}</p>
                
            </div>
            
            
            
            }

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

                    <form className="Formulario" onSubmit={sendOrder}>
                        <label>Nombre:</label>
                        <input type="text" />
                        <label>Teléfono:</label>
                        <input type="number" />
                        <label>E mail:</label>
                        <input type="email" />

                        <button className="ButtonCart" type="submit"> Enviar orden</button>

                    </form>

                    


                    
                    </> 
                    
                ):(
                    <>
                    <p className="Finalcompra"> NO HAY ITEMS EN EL CARRITO  </p>
                    <Link className="VolverAlCatalogo" to='/catalogo/'>Volver al catálogo</Link>
                    </>

                ) }
                


            </div>

        </div>

    )

}

export default CartContainer;