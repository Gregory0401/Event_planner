import React, { useState } from "react";
import s from "./Dropdown.module.css";

export const Dropdown = ({ handleSelected, value }) => {
  const [selectedValue, setSelectedValue] = useState("showAll");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleSelected(event.target.value);
  };

  return (
    <>
      <div className={s.container}>
        <label htmlFor="tweets" className={s.label}>
          Select category Event 👉
        </label>
        <select
          onChange={handleChange}
          value={selectedValue}
          name="tweets"
          id="tweets"
          className={s.select}
        >
          <option value="showAll" className={s.option}>
            Show all
          </option>
          <option value="work" className={s.option}>
            Work
          </option>
          <option value="purchases" className={s.option}>
            Purchases
          </option>
          <option value="home" className={s.option}>
            Home
          </option>
          <option value="other" className={s.option}>
            Other
          </option>
        </select>
      </div>
    </>
  );
};

export default Dropdown;
