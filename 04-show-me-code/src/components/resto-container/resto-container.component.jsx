import { useState } from "react";
import { resList } from "../../utils/mock-data";
import { Card } from "../card/card.component";

export const RestoContainer = () => {
  const filterByRating = (option, allList) => {
    console.log("filter inside", option);
    console.log("all list", allList);
    const filteredList = restoList.filter((item) => item.data.avgRating >= 4.3);
    setRestoList(filteredList);

    // setFilterOptions([...allList, ])
  };

  const sortByDeliveryTime = (option) => {
    console.log("del id", option);
    const sortedByAsec = restoList.sort(
      (a, b) => a.data.costForTwo < b.data.costForTwo
    );

    setRestoList(sortedByAsec);
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

  // console.log("fillllllll option- from out", filterOptions);
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
              // style={{
              //   borderBottom: op.isSelected ? "1px solid red" : "none",
              // }}
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
