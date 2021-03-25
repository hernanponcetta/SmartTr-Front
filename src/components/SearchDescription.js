import React from "react";

const SearchDescription = ({ description, matchedSubstring }) => {
  if (description.length > 45) {
    description = description.substr(0, 45) + "...";
  }
  const head = description.substr(0, matchedSubstring.offset);
  const term = description.substr(
    matchedSubstring.offset,
    matchedSubstring.length + 1
  );
  const tail = description.substr(
    matchedSubstring.offset + 1 + matchedSubstring.length
  );

  return (
    <div className="self-center px-1 w-full">
      {head}
      <span className="font-bold text-gray-800">{term}</span>
      {tail}
    </div>
  );
};

export default SearchDescription;
