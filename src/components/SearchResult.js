import React from "react";
import SearchDescription from "./SearchDescription";
import LocationMarker from "./icons/LocationMarker";

const SearchResult = ({ resetInput, place, map, addMarker }) => {
  const handleOnClick = () => {
    const service = new window.google.maps.places.PlacesService(map);
    service.getDetails(
      {
        placeId: place.place_id,
      },
      addMarker
    );
    resetInput();
  };

  return (
    <div
      onClick={handleOnClick}
      className="text-xs text-gray-600 py-2 hover:bg-gray-100 flex"
    >
      <LocationMarker />
      <SearchDescription
        description={place.description}
        matchedSubstring={place.matched_substrings[0]}
      />
    </div>
  );
};

export default SearchResult;
