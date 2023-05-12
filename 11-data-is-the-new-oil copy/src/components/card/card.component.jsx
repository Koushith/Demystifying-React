import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const { resList } = props;
  const { name, cuisines, avgDeliveryTime, cost, ratings, image, id } = resList;

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
      <div className="quick-view" onClick={() => navigate(`/restaurant/${id}`)}>
        Quick view
      </div>
    </div>
  );
};
