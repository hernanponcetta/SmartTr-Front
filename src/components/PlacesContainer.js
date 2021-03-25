import React from "react";
import PlaceItem from "./PlaceItem";

const PlacesContainer = ({ map, places, display, addMarker }) => {
  const placesList = places.map((place) => {
    return (
      <PlaceItem
        key={place.place_id}
        placeId={place.place_id}
        map={map}
        description={place.description}
        matched_substring={place.matched_substrings[0]}
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

export default PlacesContainer;
