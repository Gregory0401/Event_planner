import React, { useState } from 'react';
import s from './Dropdown.module.css';

const Dropdown = ({ handleSelected, value }) => {
  const [selectedValue, setSelectedValue] = useState('Category');
  const [isVisible, setIsVisible] = useState(false);
  const val = event => {
    setSelectedValue(event.target.value);
    handleSelected(event.target.value);
  };
  const open = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <>
      <div className={s.main_container}>
        <div className={s.start_category} onClick={open}>
          {selectedValue}
        </div>
        <div className={s.start_category2} onClick={open}></div>

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
                  name="category"
                  value="business"
                  className={s.input_c}
                  onChange={open}
                />
                Business
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="category"
                  value="music"
                  className={s.input_c}
                  onChange={open}
                />
                Music
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="category"
                  value="art"
                  className={s.input_c}
                  onChange={open}
                />
                Art
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="category"
                  value="party"
                  className={s.input_c}
                  onChange={open}
                />
                Party
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="category"
                  value="sport"
                  className={s.input_c}
                  onChange={open}
                />
                Sport
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="category"
                  value="workshop"
                  className={s.input_c}
                  onChange={open}
                />
                Workshop
              </label>
            </div>
            <div className={s.label_container} onChange={val}>
              <label className={s.label}>
                <input
                  type="radio"
                  name="category"
                  value="conference"
                  className={s.input_c}
                  onChange={open}
                />
                Conference
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
