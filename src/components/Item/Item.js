import ItemCount from '../ItemCount/ItemCount.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Item.css';

const Item = (product) => {

  const [contador, setContador]= useState(0);


  const onAdd = (qty) => {
    alert(`Has agregado ${product.name} x ${qty} `);
    setContador(qty)
  };

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`}>
        <img className="product-card__image" src={product.thumbnail} alt="${name}" />
      </Link>

      <h3 className="product-card__name">{product.name}</h3>
      <span className="product-card__name">${product.price}</span>
      <h3 className="product-card__name">Cantidad agregada: {contador}</h3>

      <ItemCount stock={product.stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;