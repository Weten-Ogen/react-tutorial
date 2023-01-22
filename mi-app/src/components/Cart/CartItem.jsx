import React from 'react'
import { removeItem,decrease,increase } from '../../app/features/cart';
import { useDispatch } from 'react-redux';


const CartItem = ({id ,price ,title, img , amount }) => {
   const dispatch = useDispatch();
  return (
    <article className='cart-item'>
        <img  src={img} alt='title'/>
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            {/* remove btn */}
            <button 
            className='remove-btn' 
            onClick={() => dispatch(removeItem)}
            >remove
            </button>
        </div>
        <div>
          {/* increase btn */}
          <button 
          className='amount-btn'
          onClick={() => dispatch(increase)}
          >
          </button>
        </div>
        <p className='amount'> {amount}</p>
        <div>
        {/* decrease btn */}
        <button 
        className='amount-btn'
        onClick={() => dispatch(decrease)}
        >
        </button>
      </div>
    </article>
  )
}

export default CartItem
