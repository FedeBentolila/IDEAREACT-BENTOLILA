import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import productList from '../MockData/MockData';
import { useParams } from 'react-router-dom';

import '../Item/Item.css';

const ItemDetailContainer = () => {

  const {productId}= useParams();

  
  const [products, setProducts] = useState([]);

  const getProduct = (id) => { 
        return new Promise((resolve, reject) => {
    
        const item = productList.find(item=>item.id === parseInt (id));
        resolve(item); 
    
  })}

  useEffect(()=> {
    const getproducto= async()=>{
      const producto= await getProduct(productId);
      setProducts(producto);

      
  

    }
    getproducto();

  }, [productId]) 

  console.log(products)
  

  return (
    <div className="product-list-container">
      
         
                  <ItemDetail
                    key={products.id}
                    name={products.name}
                    thumbnail={products.thumbnail}
                    price={products.price}
                    stock={products.stock}
                    id={products.id}
                    brand={products.brand}
                    type={products.type}
                  />
      
       
    </div>
  );
};

export default ItemDetailContainer;