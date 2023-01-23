import React from 'react'
import "./style.css"
import { closeModal } from '../../app/features/modal'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../app/features/cart'

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items in your shopping cart?</h4>
        <div className='btn-container'>
            <button 
            type="button" 
            className='btn-1 confirm-btn'
            onClick={() => 
                {
                dispatch(clearCart())
                dispatch(closeModal())
                }
            }
            >confirm
            </button>
            <button 
            type="button" 
            className='btn-1 clear-btn'
            onClick={() => dispatch(closeModal())}
            >cancel 
            </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
