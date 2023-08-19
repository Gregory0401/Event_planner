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
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [dateValid, setDateValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);
  const [locationValid, setLocationValid] = useState(false);
  const nameError = 'Field cannot be empty';

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
    e.target.value.length === 0 && setNameValid(true);
    setTimeout(() => {
      setNameValid(false);
    }, 2000);
  };

  const blurHandlerDescription = e => {
    e.target.value.length === 0 && setDescriptionValid(true);
    setTimeout(() => {
      setDescriptionValid(false);
    }, 2000);
  };
  const blurHandlerDate = e => {
    e.target.value.length === 0 && setDateValid(true);
    setTimeout(() => {
      setDateValid(false);
    }, 2000);
  };

  const blurHandlerTime = e => {
    e.target.value.length === 0 && setTimeValid(true);
    setTimeout(() => {
      setTimeValid(false);
    }, 2000);
  };
  const blurHandlerLocation = e => {
    e.target.value.length === 0 && setLocationValid(true);
    setTimeout(() => {
      setLocationValid(false);
    }, 2000);
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
            {nameValid && nameError && (
              <div style={{ color: 'red' }}>{nameError}</div>
            )}
            <input
              type="text"
              id="new-todo-input"
              className={s.input}
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
              placeholder="write a task name"
              pattern="^[a-zA-Z0-9]+$"
              onBlur={e => blurHandler(e)}
            />
          </li>
          <li className={s.item}>
            <p className={s.text}>Description</p>
            {descriptionValid && nameError && (
              <div style={{ color: 'red' }}>{nameError}</div>
            )}
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
              pattern="^[a-zA-Z0-9]+$"
              onBlur={e => blurHandlerDescription(e)}
            ></textarea>
          </li>
          <li className={s.item}>
            <p className={s.text}>Select date</p>
            {dateValid && nameError && (
              <div style={{ color: 'red' }}>{nameError}</div>
            )}
            <input
              type="date"
              className={s.input}
              name="date"
              autoComplete="off"
              value={date}
              onChange={handleChangeDate}
              placeholder="write a date "
              onBlur={e => blurHandlerDate(e)}
            />
          </li>
          <li className={s.item}>
            <p className={s.text}>Select time</p>

            {timeValid && nameError && (
              <div style={{ color: 'red' }}>{nameError}</div>
            )}
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={handleChangeTime}
              className={s.input}
              onBlur={e => blurHandlerTime(e)}
            />
          </li>

          <li className={s.item}>
            <p className={s.text}>Location</p>
            {locationValid && nameError && (
              <div style={{ color: 'red' }}>{nameError}</div>
            )}
            <input
              type="text"
              className={s.input}
              name="location"
              autoComplete="off"
              value={location}
              onChange={handleChangeLocation}
              placeholder="write a location"
              pattern="^[a-zA-Z]+$"
              onBlur={e => blurHandlerLocation(e)}
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
export default CreateEvent;
