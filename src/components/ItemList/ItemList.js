import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import productList from '../MockData/MockData';

import './ItemList.css';

const ItemList = () => {

  const {categoryId}= useParams();
  
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      
        resolve(productList);
      
    }, 2000);
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
  }, [categoryId]) 

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