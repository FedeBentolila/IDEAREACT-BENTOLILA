import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
//MockList previa: import productList from '../MockData/MockData';
import { db } from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

import './ItemList.css';

const ItemList = () => {

  const {categoryId}= useParams();
  
  const [products, setProducts] = useState([]);


  useEffect(()=> {
    const getData= async()=>{

      const query= collection(db, "Items");
      const response= await getDocs(query);
      const productos= response.docs.map(doc =>{
        const newProduct={
          ...doc.data(),
          id: doc.id
        }
        return newProduct
      }  
        )   
        if(categoryId){
          const newProducts = productos.filter(item=>item.category === categoryId);
          setProducts(newProducts)}
          else{
            setProducts(productos);
          }
    }
    getData();

  }, [categoryId]) 

  
 /* const getProducts = new Promise((resolve, reject) => {
    
      
        resolve(productList);
      
    
  });

  useEffect(()=> {
    getProducts.then(result=> {
      if(categoryId){
      const newProducts = result.filter(item=>item.category === categoryId);
      setProducts(newProducts)}
      else{
        setProducts(result);
      }
    } 
    )
  }, [categoryId])  */

  return (
    <div className="product-list-container">
      {
        
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
                
                return (
                  <Item
                    key={product.id}
                    name={product.name}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                  />
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  );
};

export default ItemList;