import React from "react";

const ItemsContainer = (props) => {
  return (
    <div
      className={`bg-white w-96 overflow-hidden border border-gray-300 rounded-md mt-1 ${props.display}`}
    >
      {props.items}
    </div>
  );
};

export default ItemsContainer;
