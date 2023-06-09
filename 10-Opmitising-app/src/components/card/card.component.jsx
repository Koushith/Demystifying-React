import { Link, useNavigate } from "react-router-dom";

export const Card = (props) => {
  const { resList } = props;
  console.log(resList);
  const { name, cuisines, avgDeliveryTime, cost, ratings, image, id } = resList;
  console.log("name", name);
  const navigate = useNavigate();
  return (
    <div className="res-card">
      <img src={image} alt="" className="res-image" />
      <h3 className="res-name">{name}</h3>
      <div className="cusines">{cuisines.join(", ")}</div>
      <div className="meta-info">
        <span className="rating">{ratings} Stars</span>
        <span>{avgDeliveryTime} Min</span>
        <span>{cost * 2} Rs</span>
      </div>
      <Link className="quick-view" to={`/restaurant/${id}`}>
        Quick view
      </Link>
    </div>
  );
};
