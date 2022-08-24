import './ItemListContainer.css';

const ItemListContainer =({greeting})=>{
    return (
        <div className="ItemListContainer">

            <div className="Greeting">
                <h1>{greeting}</h1>
            </div>

        </div>

    )

}

export default ItemListContainer;