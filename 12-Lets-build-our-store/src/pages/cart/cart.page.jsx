import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrementQty, incrementQty } from "../../slices/cart.slice";
import { useEffect, useState } from "react";

export const CartPage = () => {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();

  console.log("cart iktems", cartItems);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const incrementQtyHandler = (id) => {
    console.log(id);
    dispatch(incrementQty({ id: id }));
  };

  const decrementQtyHandler = (id) => {
    dispatch(decrementQty({ id: id }));
  };

  // const totalBill = () => {
  //   const totalSum = cartItems.reduce((a, c) => {
  //     console.log("aaaaaaaaaaaaaa", a);
  //     return a?.quantity * c?.price;
  //   }, 0);

  //   console.log("total sum", totalSum);
  //   setTotal(totalSum);
  // };

  const totalBill = () => {
    const totalSum = cartItems.reduce((sum, item) => {
      const itemTotal = item.quantity * item.price;
      return sum + itemTotal;
    }, 0);

    setTotal(totalSum);
  };

  useEffect(() => {
    totalBill();
  }, [cartItems]);

  return (
    <>
      <h1>Cart PAge</h1>

      <button onClick={clearCartHandler}>Clear Cart</button>

      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.price}$</h1>

            <div style={{ fontSize: 18 }}>
              <span onClick={() => incrementQtyHandler(item.id)}>+</span>
              {item.quantity}
              <span onClick={() => decrementQtyHandler(item.id)}>-</span>
            </div>
          </div>
        ))}

        <hr />

        <h1>Total bill = {Math.floor(total).toFixed(2)}</h1>
      </div>
    </>
  );
};
