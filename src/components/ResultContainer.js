import { PreviousMap } from "postcss";
import React from "react";
import SerachResult from "./SearchResult";
import SearchResult from "./SearchResult";

const ResultContainer = ({ resetInput, map, places, display, addMarker }) => {
  const placesList = places.map((place) => {
    return (
      <SerachResult
        resetInput={resetInput}
        key={place.place_id}
        place={place}
        map={map}
        addMarker={addMarker}
      />
    );
  });
  return (
    <div
      className={`bg-white border border-gray-300 text-gray-800 rounded-md mt-2 w-96 ${display}`}
    >
      {placesList}
    </div>
  );
};

export default ResultContainer;
