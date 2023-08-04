import React, { useState } from 'react';
import s from './CreateEvent.module.css';
import { NavLink } from 'react-router-dom';

function CreateEvent({
  handleSubmit,
  handleChange,
  handleChangeDate,
  handleChangeDescription,
  name,
  date,
  description,
  handleChangePriority,
  handleChangeCategory,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePriority, setIsVisiblePriority] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValueCategory, setSelectedValueCategory] = useState('');

  const open_priority = () => {
    setIsVisiblePriority(prevState => !prevState);
  };
  const open = () => {
    setIsVisible(prevState => !prevState);
  };
  const val = event => {
    setSelectedValue(event.target.value);
  };
  const val2 = event => {
    setSelectedValueCategory(event.target.value);
  };
  return (
    <div className={s.container}>
      <NavLink to="/" className={s.link}>
        <div className={s.arrow}></div>
        <div className={s.back}>Back</div>
      </NavLink>
      <div className={s.container_h2}>
        <h2 className={s.h2}>Create new element</h2>
      </div>
      <form onSubmit={handleSubmit} className={s.form}>
        <ul className={s.input_container}>
          <li className={s.item}>
            <p className={s.text}>Title</p>
            <input
              type="text"
              id="new-todo-input"
              className={s.input}
              name="text"
              autoComplete="off"
              value={name}
              onChange={handleChange}
              placeholder="write a task name"
            />
          </li>
          <li className={s.item}>
            <p className={s.text}>Description</p>
            <textarea
              className={s.textarea}
              name="description"
              id="description"
              cols="20"
              rows="8"
              placeholder="write a description event"
              autoComplete="off"
              value={description}
              onChange={handleChangeDescription}
            ></textarea>
          </li>
          {/* <li className={s.item}>
            <label className={s.labelEvent}>Location</label>
            <input
              type="text"
              className={s.input}
              name="location"
              autoComplete="off"
              // value={location}
              onChange={handleChange}
              placeholder="write a location"
            />
          </li> */}
          <li onClick={handleChangePriority} className={s.priority_button}>
            <p className={s.text}>Priority:</p>
            <div className={s.start} onClick={open_priority}>
              {selectedValue}
            </div>

            {isVisiblePriority && (
              <div>
                <div className={s.label_container} onChange={val}>
                  <label className={s.label}>
                    <input
                      type="radio"
                      name="priority"
                      value="high"
                      className={s.input_c}
                      onChange={open_priority}
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
                      onChange={open_priority}
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
                      onChange={open_priority}
                    />
                    Low
                  </label>
                </div>
              </div>
            )}
          </li>
          <li onClick={handleChangeCategory}>
            <p className={s.text}>Category:</p>
            <div className={s.start} onClick={open}>
              {selectedValueCategory}
            </div>

            {isVisible && (
              <div>
                <div className={s.label_container} onChange={val2}>
                  <label className={s.label}>
                    <input
                      className={s.input_c}
                      type="radio"
                      name="category"
                      value="art"
                      onChange={open}
                    />
                    Art
                  </label>
                </div>
                <div className={s.label_container} onChange={val2}>
                  <label className={s.label}>
                    <input
                      className={s.input_c}
                      type="radio"
                      name="category"
                      value="music"
                      onChange={open}
                    />
                    Music
                  </label>
                </div>
                <div className={s.label_container} onChange={val2}>
                  <label className={s.label}>
                    <input
                      className={s.input_c}
                      type="radio"
                      name="category"
                      value="business"
                      onChange={open}
                    />
                    Business
                  </label>
                </div>
                <div className={s.label_container} onChange={val2}>
                  <label className={s.label}>
                    <input
                      className={s.input_c}
                      type="radio"
                      name="category"
                      value="party"
                      onChange={open}
                    />
                    Party
                  </label>
                </div>
              </div>
            )}
          </li>
          <li className={s.item}>
            <p className={s.text}>Select date</p>
            <input
              type="text"
              className={s.input}
              name="date"
              autoComplete="off"
              value={date}
              onChange={handleChangeDate}
              placeholder="write a date and time"
            />
          </li>
        </ul>

        <div className={s.button_container}>
          <button type="submit" className={s.button}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateEvent;
