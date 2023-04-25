export const Card = (props) => {
  const { resList } = props;
  const {
    name,
    cuisines,
    maxDeliveryTime,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = resList.data;
  return (
    <div className="res-card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt=""
        className="res-image"
      />
      <h3 className="res-name">{name}</h3>
      <div className="cusines">{cuisines.join(", ")}</div>
      <div className="meta-info">
        <span className="rating">{avgRating} Stars</span>
        <span>{maxDeliveryTime} Min</span>
        <span>{costForTwo / 100} Rs</span>
      </div>
      <div className="quick-view">Quick view</div>
    </div>
  );
};
