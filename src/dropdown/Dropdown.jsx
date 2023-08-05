import React, { useState } from 'react';
import s from './Dropdown.module.css';
// const screenWidth = window.innerWidth;

export const Dropdown = ({ handleSelected, value }) => {
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
          </div>
        )}
      </div>
    </>
    // <>
    //   <div>
    //     <label htmlFor="tweets" className={s.label}></label>
    //     <select
    //       onChange={handleChange}
    //       value={selectedValue}
    //       name="tweets"
    //       id="tweets"
    //       className={s.select}
    //     >
    //       <>
    //         <option value="showAll" className={s.option}>
    //           Category
    //         </option>
    //         <option value="showAll" className={s.option}>
    //           Show all
    //         </option>
    //         <option value="music" className={s.option}>
    //           Music
    //         </option>
    //         <option value="art" className={s.option}>
    //           Art
    //         </option>
    //         <option value="business" className={s.option}>
    //           Business
    //         </option>
    //         <option value="party" className={s.option}>
    //           Party
    //         </option>
    //       </>
    //     </select>
    //   </div>
    // </>
  );
};

export default Dropdown;
