import s from '../pages/DetailsEvent.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function EventCardDetails({ task, deleteTask, card }) {
  // const [open, setOpen] = useState(false);
  console.log(card);

  //   const changeFocus = () => {
  //     setOpen(true);
  //   };
  // const detailsEvent = id => {};
  // const close = () => {
  //   setOpen(false);
  // };

  // const changeFocus = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      <ul className={s.card} key={task.id}>
        <li className={s.title}>{task.category}</li>

        <li className={s.title}>{task.name}</li>

        <li className={s.item}>{task.date}</li>
        <li className={s.item}>{task.description}</li>
        {task.priority === 'high' && <li className={s.p_height}></li>}
        {task.priority === 'medium' && <li className={s.p_medium}></li>}
        {task.priority === 'low' && <li className={s.p_low}></li>}
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
        {/* <button
          className={s.button}
          onClick={() => {
            changeFocus();
            editTask2(task.id);
          }}
        >
          Edit
        </button> */}
      </ul>
    </div>
  );
}
export default EventCardDetails;
