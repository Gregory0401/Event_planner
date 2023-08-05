import React, { useState } from 'react';
import s from './Dropdown.module.css';

export const DropdownPriority = ({ handleSelectedPriority, value2 }) => {
  const [selectedValue, setSelectedValue] = useState('Priority');
  const [isVisible, setIsVisible] = useState(false);

  const val = event => {
    setSelectedValue(event.target.value);
    handleSelectedPriority(event.target.value);
  };
  const open = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <>
      <div className={s.main_container}>
        <div className={s.start} onClick={open}>
          {selectedValue}
        </div>
        <div className={s.start2} onClick={open}></div>

        {isVisible && (
          <div className={s.second_container}>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="priority"
                  value="showAll"
                  className={s.input_c}
                  onChange={open}
                />
                Show all
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  className={s.input_c}
                  onChange={open}
                />
                High
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  className={s.input_c}
                  onChange={open}
                />
                Medium
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  className={s.input_c}
                  onChange={open}
                />
                Low
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownPriority;
