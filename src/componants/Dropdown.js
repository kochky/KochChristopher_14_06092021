import React, { useState } from "react";
import '../css/Dropdown.css';

const Dropdown = ({
  selectValue,
  handleSelectChange,
  selectLabel,
  selectList,
  selectName,
  isOpen,
  handleOpen,
}) => {
  const [activeDescendant, setActiveDescendant] = useState(
    `option-${selectValue.text}`
  );
  return (
    <div className="dropdown-wrapper">
      <label htmlFor={`${selectName}-btn`} className="dropdown-label">
        {selectLabel}
      </label>
      <span
        className={isOpen ?"dropdown bottom-border": "dropdown"}
        id={`${selectName}-btn`}
        onClick={() => handleOpen(selectName)}
      >
        <span>{selectValue.text}</span>
        {isOpen ? <i class="fas fa-angle-down fa-lg"></i> :<i class="fas fa-angle-up fa-lg"></i> } 
      </span>
      <div className={isOpen ? "dropdown-options active" : "dropdown-options"}>
        <ul className="dropdown-list" id={`${selectName}-menu`}>
          {selectList.map((elt) => (
            <li
              key={elt.value}
              value={elt}
              onClick={() => {
                handleSelectChange(selectName, elt);
                setActiveDescendant(`option-${elt.text}`);
                handleOpen(selectName);
              }}
              id={`option-${elt.text}`}
              className="dropdown-option"
              tabIndex="-1"
            >
              {elt.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;