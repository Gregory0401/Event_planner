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
  return (
    <div className={s.container}>
      <NavLink to="/" className={s.link}>
        <button type="button"> back</button>
      </NavLink>
      <form onSubmit={handleSubmit} className={s.form}>
        <ul className={s.input_container}>
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
              Busines
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
            <label className={s.labelEvent}>Name event</label>
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
            <label className={s.labelEvent}>Date event</label>
            <input
              type="text"
              id="new-todo-input2"
              className={s.input}
              name="date"
              autoComplete="off"
              value={date}
              onChange={handleChangeDate}
              placeholder="write a date and time"
            />
          </li>
          <li className={s.item}>
            <label className={s.labelEvent}>Comment</label>
            <textarea
              className={s.textarea}
              name="description"
              id="description"
              placeholder="write a description event"
              // cols="30"
              // rows="8"
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
