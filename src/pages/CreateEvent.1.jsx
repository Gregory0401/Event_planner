import React, { useState } from 'react';
import s from './CreateEvent.module.css';
import { NavLink } from 'react-router-dom';

export function CreateEvent({
  handleSubmit,
  handleChange,
  handleChangeDate,
  handleChangeDescription,
  name,
  date,
  time,
  location,
  handleChangeTime,
  description,
  handleChangePriority,
  handleChangeCategory,
  handleChangeLocation,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePriority, setIsVisiblePriority] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValueCategory, setSelectedValueCategory] = useState('');
  const [openNotification, setOpenNotification] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [nameError, setNameError] = useState('Field cannot be empty');

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

  const handleClick = () => {
    setOpenNotification(true);
    setTimeout(() => {
      setOpenNotification(false);
    }, 2000);
  };

  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
    }
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
        {openNotification && (
          <div className={s.notification}>Create complete</div>
        )}
        <ul className={s.input_container}>
          <li className={s.item}>
            <p className={s.text}>Title</p>
            <input
              type="text"
              id="new-todo-input"
              className={s.input}
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
              placeholder="write a task name"
              onBlur={e => blurHandler(e)}
            />
          </li>
          <li className={s.item}>
            <p className={s.text}>Description</p>
            <textarea
              className={s.textarea}
              name="description"
              id="description"
              cols="35"
              rows="8"
              placeholder="write a description event"
              autoComplete="off"
              value={description}
              onChange={handleChangeDescription}
              onBlur={e => blurHandler(e)}
            ></textarea>
          </li>
          <li className={s.item}>
            <p className={s.text}>Select date</p>
            <input
              type="date"
              className={s.input}
              name="date"
              autoComplete="off"
              value={date}
              onChange={handleChangeDate}
              placeholder="write a date "
            />
          </li>
          <li className={s.item}>
            <p className={s.text}>Select time</p>
            <div>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={handleChangeTime}
                className={s.input}
              />
            </div>
          </li>

          <li className={s.item}>
            <p className={s.text}>Location</p>
            <input
              type="text"
              className={s.input}
              name="location"
              autoComplete="off"
              value={location}
              onChange={handleChangeLocation}
              placeholder="write a location"
            />
          </li>
          <li onClick={handleChangeCategory} className={s.container_a}>
            <p className={s.text}>Category:</p>
            <div className={s.start} onClick={open}>
              {selectedValueCategory}
            </div>

            {isVisible && (
              <div className={s.container_b}>
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
                      type="radio"
                      name="category"
                      value="sport"
                      className={s.input_c}
                      onChange={open}
                    />
                    Sport
                  </label>
                </div>
                <div className={s.label_container} onChange={val2}>
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
                <div className={s.label_container} onChange={val2}>
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
                <div className={s.label_container} onChange={val2}>
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
          </li>

          <li className={s.item}>
            <p className={s.text_picture}>Add picture</p>
            <input
              type="text"
              className={s.input}
              disabled={true}
              placeholder="change a picture"
            />
          </li>
          <li onClick={handleChangePriority} className={s.container_a}>
            <p className={s.text}>Priority:</p>
            <div className={s.start} onClick={open_priority}>
              {selectedValue}
            </div>

            {isVisiblePriority && (
              <div className={s.container_b}>
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
        </ul>
        <div className={s.button_container}>
          <button type="submit" className={s.button} onClick={handleClick}>
            Add event
          </button>
        </div>
      </form>
    </div>
  );
}
