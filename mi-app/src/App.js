import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/Cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import {calculateTotals } from "./app/features/cart"
import {useEffect} from 'react';
import Modal from "./components/Modal/Modal";


function App() {
  const { cartItems } = useSelector(state => state.cart);
  const {isOpen}  = useSelector(state => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch]);

  return (
    <div className="App">
    {isOpen  && <Modal /> }
    <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
