import React, { useState } from "react";
import { inputsData } from "../utils/data";

const FormComponent = ({ handleFormData, handleSaveData, handlePopup, ...state }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const displayedInputsData = showAll
    ? inputsData
    : inputsData.slice(0, 5);

  return (
    <form id="myForm">
      {displayedInputsData.map((obj) => (
        <div key={obj.inputName} className="inputDiv">
          <label className="formLabel">{obj.labelname}</label>
          <input
            className={obj.required ? obj.inputclass + ' required' : obj.inputclass}
            type={obj.inputName === 'height' || obj.inputName === 'width' ? 'number' : 'text'}
            id={obj.inputName}
            name={obj.inputName}
            onChange={handleFormData}
            value={state[obj.inputName]}
          />
        </div>
      ))}
      <button onClick={toggleShowAll} className="formBtn" type="button">
        {showAll ? "Show Less" : "Show More"}
      </button>
      <button
        onClick={() => {
          handleSaveData();
          handlePopup();
        }}
        className="formBtn saveBtn"
        type="button"
      >
        Save
      </button>
    </form>
  );
};

export default FormComponent;