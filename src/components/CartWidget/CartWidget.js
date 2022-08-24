import iconocart from '../CartWidget/carticon.png'

const CartWidget =()=>{
    return (
        <div className="CartWidget">

            <div className="IconoCart">
            <img src={iconocart} width={'100px'} alt="Icono del carrito"/>
            </div>

        </div>

    )

}

export default CartWidget;