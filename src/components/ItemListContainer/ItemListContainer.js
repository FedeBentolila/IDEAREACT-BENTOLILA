import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer =({greeting})=>{

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
      };

    return (
        <div className="ItemListContainer">

            <div className="Greeting">
                <h1>{greeting}</h1>
            </div>

            <>
            <ItemCount onAdd={onAdd} initial={1} stock={7} />
            </>

        </div>

    )

}

export default ItemListContainer;