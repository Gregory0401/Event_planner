import s from "../pages/DetailsEvent.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function EventCardDetails({
  task,
  deleteTask,
  handleChangeDescriptionEdit,
  handleChangeDateEdit,
  handleChangeEdit,
  handleSubmit2,
  editTask2,
}) {
  const [open, setOpen] = useState(false);

  //   const changeFocus = () => {
  //     setOpen(true);
  //   };

  const close = () => {
    setOpen(false);
  };

  const changeFocus = () => {
    setOpen(true);
  };

  
  return (
    <div>
      <ul className={s.card} key={task.id}>
        <li className={s.title}>{task.category}</li>
        {open ? (
          <>
            <form onSubmit={handleSubmit2}>
              <ul>
                <li>
                  <label className={s.label}>Name event</label>
                  <input
                    type="text"
                    className={s.input}
                    name="text"
                    defaultValue={task.name}
                    onChange={handleChangeEdit}
                  />
                </li>
                <li>
                  <label className={s.label}>Date event</label>
                  <input
                    type="text"
                    className={s.input}
                    name="date"
                    defaultValue={task.date}
                    onChange={handleChangeDateEdit}
                  />
                </li>
                <li>
                  <label className={s.label}>Comment event</label>
                  <textarea
                    cols="20"
                    rows="9"
                    autoComplete="off"
                    defaultValue={task.description}
                    onChange={handleChangeDescriptionEdit}
                  ></textarea>
                </li>
              </ul>
              <button type="submit">Edit</button>
              <button type="button" onClick={close}>
                Close
              </button>
            </form>
          </>
        ) : (
          <li className={s.title}>{task.name}</li>
        )}
        <li className={s.item}>{task.date}</li>
        <li className={s.item}>{task.description}</li>
        {task.priority === "height" && <li className={s.p_height}></li>}
        {task.priority === "medium" && <li className={s.p_medium}></li>}
        {task.priority === "low" && <li className={s.p_low}></li>}
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className={s.button}
        >
          <NavLink to="/" className={s.link_button}>
            Delete
          </NavLink>
        </button>
        <button
          className={s.button}
          onClick={() => {
            changeFocus();
            editTask2(task.id);
          }}
        >
          Edit
        </button>
      </ul>
    </div>
  );
}
export default EventCardDetails;
