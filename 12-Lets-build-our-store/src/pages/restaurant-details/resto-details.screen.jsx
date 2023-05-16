import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { restaurants } from "../../utils/mock-data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart.slice";

export const RestroDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const res = restaurants.find((res) => res.id === parseInt(id));

    setRestaurant(res);
  }, []);

  const addToCartHandle = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div>
        <h1>Restaurant Details - id ={id}</h1>

        {restaurant.length <= 0 ? (
          <h1>Loading</h1>
        ) : (
          <>
            <h1>{restaurant?.name}</h1>

            <div>
              <p>Cousines : {restaurant?.cuisines.join(", ")}</p>

              <h2>Menu- {restaurant.menuOptions.length}</h2>

              {restaurant.menuOptions.map((item, index) => (
                <div key={item.name}>
                  <h3>{item.name}</h3>

                  <h2>{item.price} Rs</h2>

                  <h4>{item.rating} stars</h4>

                  <div style={{ fontSize: 18 }}>
                    <button onClick={() => addToCartHandle(item)}>
                      Add To Cart
                    </button>
                    <span>+</span>
                    {0} <span>-</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
