import React, { useState } from 'react';
import s from './Dropdown.module.css';

export const Dropdown = ({ handleSelected, value }) => {
  const [selectedValue, setSelectedValue] = useState('showAll');
  // const [isVisible, setIsVisible] = useState(false);

  const handleChange = event => {
    setSelectedValue(event.target.value);
    handleSelected(event.target.value);
  };

  // const open = () => {
  //   setIsVisible(prevState => !prevState);
  //   console.log(1);
  // };

  return (
    <>
      <div>
        <label htmlFor="tweets" className={s.label}></label>
        <select
          onChange={handleChange}
          value={selectedValue}
          name="tweets"
          id="tweets"
          className={s.select}
        >
          <>
            <option value="showAll" className={s.option}>
              Category
            </option>
            <option value="showAll" className={s.option}>
              Show all
            </option>
            <option value="music" className={s.option}>
              Music
            </option>
            <option value="art" className={s.option}>
              Art
            </option>
            <option value="business" className={s.option}>
              Business
            </option>
            <option value="party" className={s.option}>
              Party
            </option>
          </>
        </select>
      </div>
    </>
  );
};

export default Dropdown;
