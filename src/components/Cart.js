import { useDispatch, useSelector } from "react-redux";
import { makeCartEmpty } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(makeCartEmpty());
  };

  return (
    <div>
      <button
        className="bg-green-600 p-2 m-3 font-bold text-white rounded-md"
        onClick={() => clearCart()}
      >
        Clear Cart
      </button>
      <div>
        {cartItems.map((item, index) => (
          <div key={index}>
            <h1>{item} </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
