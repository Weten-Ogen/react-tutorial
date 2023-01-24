import React from 'react'
import { removeItem,decrease,increase } from '../../app/features/cart';
import { useDispatch } from 'react-redux';
import  {BsChevronUp, BsChevronDown, } from 'react-icons/bs';
import "./cartitem.css"

const CartItem = ({id ,price ,title, img , amount }) => {
   const dispatch = useDispatch();
  return (
    <article className='cart-item'>
        <img  src={img} alt={title}/>
        <div className='cart-info'>
            <h3>{title}</h3>
            <h4 className='item-price'>${price}</h4>
            {/* remove btn */}
            <button 
            className='remove-btn' 
            onClick={() => dispatch(removeItem(id))}
            >remove
            </button>
        </div>
        <div className='btn-icons'>
            {/* increase btn */}
            <button 
            className='amount-btn'
            onClick={() => dispatch(increase({id}))}
            ><BsChevronUp/>
            </button>
            <p className='amount'> {amount}</p>
            {/* decrease btn */}
            <button 
            className='amount-btn'
            onClick={() => {
              if(amount === 1) {
                dispatch(removeItem(id))
                return;
              }
              dispatch(decrease({id}))
            }
             }
            ><BsChevronDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem
