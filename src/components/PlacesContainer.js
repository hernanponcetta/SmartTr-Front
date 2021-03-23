import React from "react";
import PlaceItem from "./PlaceItem";

const PlacesContainer = ({ places, display }) => {
  const placesList = places.map((place) => {
    return (
      <PlaceItem
        key={place.place_id}
        description={place.description}
        matched_substring={place.matched_substrings[0]}
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

export default PlacesContainer;
