import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList]= useState([]);

    const addItem = (item, quantity)=>{

        if(productCartList.some(el => el.id === item.id)){
            let index = productCartList.findIndex(el => el.id === item.id);
            let product = productCartList[index];
            product.quantity = product.quantity + quantity;
            const newCart = [...productCartList];
            newCart.splice( index, 1, product );

            setProductCartList([ ...newCart ]);

        }

        else{
        const newProduct= {
            ...item,
            quantity
        }
        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);}
    }

    const removeItem = (itemid)=>{
        console.log("itemid", itemid)
        const newArreglo =productCartList.filter(product=>product.id !== itemid);
        setProductCartList(newArreglo);

    }

    const clear=()=>{
        const clearArreglo=[]
        setProductCartList(clearArreglo)
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear}}>
            {children}

        </CartContext.Provider>

    )

}