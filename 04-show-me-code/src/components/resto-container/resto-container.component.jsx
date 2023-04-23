import { resList } from "../../utils/mock-data";
import { Card } from "../card/card.component";

export const RestoContainer = () => {
  return (
    <div className="resto-container">
      {/* cards */}

      {resList.map((res) => (
        <Card resList={res} key={res.data.id} />
      ))}
    </div>
  );
};
