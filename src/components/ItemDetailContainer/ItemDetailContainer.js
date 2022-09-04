import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import productList from '../MockData/MockData';

import '../Item/Item.css';

const ItemDetailContainer = () => {
  
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      
        resolve(productList);
      
    }, 2000);
  });

  useEffect(()=> {
    getProducts.then((result)=> {
      setProducts(result);
    } 
    )
  })

  return (
    <div className="product-list-container">
      {
        
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
                
                return (
                  <ItemDetail
                    key={product.id}
                    name={product.name}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                    brand={product.brand}
                    type={product.type}
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

export default ItemDetailContainer;