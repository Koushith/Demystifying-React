import { useEffect, useState } from "react";
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

    // todo- not working- fix kater
    const sortedByAsec = restoList.sort(
      (a, b) => b.data.deliveryTime - a.data.deliveryTime
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

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRes, setFilteredRes] = useState(resList);
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

  // search

  const searchHandler = (e) => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value.toLowerCase());

    const queryRes = restoList.filter((list) =>
      list.data.name.toLocaleLowerCase().includes(searchTerm)
    );

    setFilteredRes(queryRes);
  };

  // console.log(searchTerm);

  useEffect(() => {
    // searchHandler();
  }, [searchTerm]);

  return (
    <>
      {/* filter tab */}

      <div>
        Temp search
        <input
          type="search"
          style={{ height: 40, width: 250 }}
          onChange={searchHandler}
          value={searchTerm}
        />
      </div>
      <div className="filter-container">
        <p className="result-count">{filteredRes.length} Restaurents</p>

        <ul className="filter-options">
          {filterOptions.map((op) => (
            <li
              onClick={() => op.onClickCb(op, filterOptions)}
              key={op.id}
              style={{
                borderBottom: op.isSelected ? "2px solid #686b78" : "none",
              }}
            >
              {op.type}
            </li>
          ))}
        </ul>
      </div>

      <div className="resto-container">
        {/* cards */}

        {filteredRes.map((res) => (
          <Card resList={res} key={res.data.id} />
        ))}
      </div>
    </>
  );
};
