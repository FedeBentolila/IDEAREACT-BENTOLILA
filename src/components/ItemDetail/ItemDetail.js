import ItemCount from '../ItemCount/ItemCount.js';

import '../Item/Item.css';
import { useState } from 'react';

const ItemDetail = (product) => {

  const [contador, setContador]= useState(0);

  const onAdd = (qty) => {
    alert(`Has agregado ${product.name} x ${qty} `);
    setContador(qty)
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={product.thumbnail} alt="${name}" />

      <h3 className="product-card__name">{product.name}</h3>
      <span className="product-card__name">${product.price}</span>
      <h3 className="product-card__name">Marca: {product.brand}</h3>
      <span className="product-card__name">Tipo: {product.type}</span>
      <h3 className="product-card__name">Cantidad agregada: {contador}</h3>

      <ItemCount stock={product.stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default ItemDetail;