import React from "react";

const ChordPicker = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="e.g. C"
      className="mt-8 px-4 py-2 text-xl text-gray-800 w-64 rounded-lg border-gray-300 border-2"
      type="text"
    />
  );
};

export default ChordPicker;
