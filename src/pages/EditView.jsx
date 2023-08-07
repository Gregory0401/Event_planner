import s from './EditView.module.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function EditView({
  editCard,
  handleSubmitEdit,
  handleChangeEdit,
  handleChangeDateEdit,
  handleChangeDescriptionEdit,
  name,
  date,
  time,
  location,
  handleChangeTimeEdit,
  description,
  handleChangePriorityEdit,
  handleChangeCategoryEdit,
  handleChangeLocationEdit,
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
      <NavLink to="/details" className={s.link}>
        <div className={s.arrow}></div>
        <div className={s.back}>Back</div>
      </NavLink>

      <h2 className={s.h2}>Edit element</h2>

      <form onSubmit={handleSubmitEdit} className={s.form}>
        <ul className={s.input_container}>
          <li className={s.item}>
            <p className={s.text}>Title</p>
            <input
              type="text"
              id="new-todo-input"
              className={s.input}
              name="text"
              autoComplete="off"
              defaultValue={editCard.name}
              value={name}
              onChange={handleChangeEdit}
              placeholder="write a task name"
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
              defaultValue={editCard.description}
              value={description}
              onChange={handleChangeDescriptionEdit}
            ></textarea>
          </li>
          <li className={s.item}>
            <p className={s.text}>Select date</p>
            <input
              type="date"
              className={s.input}
              name="date"
              autoComplete="off"
              defaultValue={editCard.date}
              value={date}
              onChange={handleChangeDateEdit}
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
                defaultValue={editCard.time}
                value={time}
                onChange={handleChangeTimeEdit}
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
              defaultValue={editCard.location}
              value={location}
              onChange={handleChangeLocationEdit}
              placeholder="write a location"
            />
          </li>
          <li onClick={handleChangeCategoryEdit} className={s.container_a}>
            <p className={s.text}>Category:</p>
            <div className={s.start} onClick={open}>
              {selectedValueCategory.length > 0
                ? selectedValueCategory
                : editCard.category}
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
                      className={s.input_c}
                      type="radio"
                      name="category"
                      value="party"
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
          <li onClick={handleChangePriorityEdit} className={s.container_a}>
            <p className={s.text}>Priority:</p>
            <div className={s.start} onClick={open_priority}>
              {selectedValue.length > 0 ? selectedValue : editCard.priority}
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
          <button type="submit" className={s.button}>
            Edit event
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditView;
