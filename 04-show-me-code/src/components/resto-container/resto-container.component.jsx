import { useState } from "react";
import { resList } from "../../utils/mock-data";
import { Card } from "../card/card.component";

export const RestoContainer = () => {
  const filterByRating = (option, allList) => {
    console.log("filter inside", option);
    console.log("all list", allList);

    // fix later
    const filteredList = restoList.filter((item) => item.data.avgRating >= 4.3);
    setRestoList(filteredList);

    //find one and update is selected to true

    const updatedList = allList.map((opt) => {
      if (opt.id === option.id) {
        return { ...opt, isSelected: true };
      }
      return { ...opt, isSelected: false };
    });

    setFilterOptions(updatedList);
  };

  const sortByDeliveryTime = (option, allList) => {
    console.log("del id", option);
    const sortedByAsec = restoList.sort(
      (a, b) => a.data.costForTwo < b.data.costForTwo
    );

    setRestoList(sortedByAsec);

    const updatedList = allList.map((opt) => {
      if (opt.id === option.id) {
        return { ...opt, isSelected: true };
      }
      return { ...opt, isSelected: false };
    });

    setFilterOptions(updatedList);
  };

  const resetFilters = (option) => {
    console.log("reset id", option);
    setRestoList(resList);
  };

  const [restoList, setRestoList] = useState(resList);
  const [filterOptions, setFilterOptions] = useState([
    {
      type: "Delivery Time",
      id: 1,
      onClickCb: sortByDeliveryTime,
      isSelected: false,
    },
    {
      type: "Ratings",
      id: 2,
      onClickCb: filterByRating,
      isSelected: false,
    },
    {
      type: "Reset Filters",
      id: 3,
      onClickCb: resetFilters,
      isSelected: false,
    },
  ]);

  console.log("fillllllll option- from out", filterOptions);
  return (
    <>
      {/* filter tab */}
      <div className="filter-container">
        <p className="result-count">{restoList.length} Restaurents</p>

        <ul className="filter-options">
          {filterOptions.map((op) => (
            <li
              onClick={() => op.onClickCb(op, filterOptions)}
              key={op.id}
              style={{
                borderBottom: op.isSelected ? "1px solid #686b78" : "none",
              }}
            >
              {op.type}
            </li>
          ))}
        </ul>
      </div>

      <div className="resto-container">
        {/* cards */}

        {restoList.map((res) => (
          <Card resList={res} key={res.data.id} />
        ))}
      </div>
    </>
  );
};
