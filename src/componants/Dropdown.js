import React, { useState } from "react";
import '../css/Dropdown.css';
import arrowIcon from "../images/angle-down-solid.svg"

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
  const [eltText,setEltText]=useState(selectValue.text)
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
        <span>{eltText}</span>
        {isOpen ? <img  alt={"Arrow icon"} src={arrowIcon} className="arrow-icon"></img> :<img alt={"Arrow icon"} src={arrowIcon}  className="arrow-icon rotate"></img> } 
      </span>
      <div className={isOpen ? "dropdown-options active" : "dropdown-options"}>
        <ul className="dropdown-list" id={`${selectName}-menu`}>
          {selectList.map((elt) => (
            <li
              key={elt.value}
              value={elt}
              onClick={() => {
                setEltText(elt.text)
                handleSelectChange(selectName, elt.value);
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