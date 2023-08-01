import React, { useState } from "react";
import s from "./Dropdown.module.css";

export const DropdownPriority = ({ handleSelectedPriority, value2 }) => {
  const [selectedValue, setSelectedValue] = useState("showAll");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleSelectedPriority(event.target.value);
  };

  return (
    <>
      <div className={s.container}>
        <label className={s.label}>Select Priority👉</label>
        <select
          onChange={handleChange}
          value={selectedValue}
          className={s.select}
        >
          <option value="showAll" className={s.option}>
            Show all
          </option>
          <option value="height" className={s.option}>
            Height
          </option>
          <option value="medium" className={s.option}>
            Medium
          </option>
          <option value="low" className={s.option}>
            Low
          </option>
        </select>
      </div>
    </>
  );
};

export default DropdownPriority;
