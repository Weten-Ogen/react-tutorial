import React from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import './style.css'
import CartItem from './CartItem';
import { openModal } from '../../app/features/modal';


const CartContainer = () => {
    const {cartItems, total, amount} = useSelector(state => state.cart)
    
    const dispatch = useDispatch();
  if(amount < 1) {
    return (
        <section className='cart'>
          <header>
          <h2>your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
          </header>
        </section>
      )
  }
  return (
    <section className='cart'>
        <header>
            <h2>your cart</h2>
        </header>
        <div>
            {cartItems.map(item => 
                <CartItem key={item.id} {...item}/>
            )}
        </div>
        <footer >
        <hr/>
            <div className='cart-total'>
                <h4>
                    <p>total</p><span>${total.toFixed(2)}</span>
                </h4>
            </div>
            <button 
            className='btn clear-btn'
            onClick={() => dispatch(openModal())}
            >clear cart</button>
        </footer>
    </section>
   
  )
}

export default CartContainer
