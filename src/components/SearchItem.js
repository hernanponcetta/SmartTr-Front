import React from "react";
import LocationMarker from "./icons/LocationMarker";

const descriptionChop = (description) => {
  if (description.length > 55) {
    return description.substr(0, 55) + "...";
  }
  return description;
};

const stringMatched = (item, place) => {
  const term = item.substr(
    place.matched_substrings[0].offset,
    place.matched_substrings[0].length + 1
  );
  const head = item.substr(0, place.matched_substrings[0].offset);
  const tail = item.substr(
    place.matched_substrings[0].offset + 1 + place.matched_substrings[0].length
  );
  return { head, term, tail };
};

const SearchItem = ({ place }) => {
  let item = descriptionChop(place.description);
  const { head, term, tail } = stringMatched(item, place);
  return (
    <div
      key={place.place_id}
      className="text-xs text-gray-600 py-2 hover:bg-gray-100 flex"
    >
      <LocationMarker />
      <div className="self-center px-1">
        {head} <span className="font-bold text-gray-800">{term}</span> {tail}
      </div>
    </div>
  );
};

export default SearchItem;
