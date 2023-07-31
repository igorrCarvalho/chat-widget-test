import React, { useState } from "react";
import { inputsData } from "../utils/data";

const FormComponent = ({ handleFormData, ...state }) => {
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
          <label>{obj.labelname}</label>
          <input
            className={obj.required ? obj.inputclass + ' required' : obj.inputclass}
            type="text"
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
    </form>
  );
};

export default FormComponent;