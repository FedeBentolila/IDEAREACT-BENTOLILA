import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'

const ItemListContainer =()=>{


    return (
        <div className="ItemListContainer">

            
            <h2 className="item-list-container__title">Productos en Venta</h2>
            <>
            <ItemList/>
            </>
            

            

        </div>

    )

}

export default ItemListContainer;