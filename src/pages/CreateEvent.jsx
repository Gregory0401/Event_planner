import React from 'react';
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
  // const location = useLocation();
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
            <p className={s.labelEvent}>Title</p>
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
          <li onClick={handleChangeCategory}>
            <p className={s.label}>Choose a category:</p>
            <label className={s.label}>
              <input
                className={s.inputCategory}
                type="radio"
                name="category"
                value="art"
              />
              Art
            </label>
            <label className={s.label}>
              <input
                className={s.inputCategory}
                type="radio"
                name="category"
                value="music"
              />
              Music
            </label>
            <label className={s.label}>
              <input
                className={s.inputCategory}
                type="radio"
                name="category"
                value="business"
              />
              Business
            </label>
            <label className={s.label}>
              <input
                className={s.inputCategory}
                type="radio"
                name="category"
                value="party"
              />
              Party
            </label>
          </li>
          <li onClick={handleChangePriority}>
            <p className={s.label}>Choose a priority event:</p>
            <label className={s.label}>
              <input type="radio" name="priority" value="high" />
              High
            </label>
            <label className={s.label}>
              <input type="radio" name="priority" value="medium" />
              Medium
            </label>
            <label className={s.label}>
              <input type="radio" name="priority" value="low" />
              Low
            </label>
          </li>

          <li className={s.item}>
            <p className={s.labelEvent}>Date event</p>
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
          <li className={s.item}>
            <p className={s.labelEvent}>Description</p>
            <textarea
              className={s.textarea}
              name="description"
              id="description"
              cols="30"
              rows="8"
              placeholder="write a description event"
              autoComplete="off"
              value={description}
              onChange={handleChangeDescription}
            ></textarea>
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
