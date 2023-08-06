import s from './EventCardDetails.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function EventCardDetails({ task, deleteTask, card }) {
  return (
    <ul className={s.card} key={task.id}>
      <div className={s.image}>
        {task.category === 'art' && <li className={s.art}></li>}
        {task.category === 'business' && <li className={s.business}></li>}
        {task.category === 'party' && <li className={s.party}></li>}
        {task.category === 'music' && <li className={s.music}></li>}
      </div>
      <li className={s.description}>{task.description}</li>
      <div className={s.date}>
        <li className={s.category}>{task.category}</li>
        {task.priority === 'high' && <li className={s.high}>high</li>}
        {task.priority === 'medium' && <li className={s.medium}>medium</li>}
        {task.priority === 'low' && <li className={s.low}>low</li>}
        <li className={s.location}>{task.location}</li>
        <li className={s.location}>
          {task.date}
          {''}at{''}
          {task.time}
        </li>
      </div>

      <div className={s.buttonContainer}>
        <button className={s.buttonEdit}>Edit</button>
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className={s.button}
        >
          <NavLink to="/" className={s.link_button}>
            Delete event
          </NavLink>
        </button>
      </div>
    </ul>
  );
}
export default EventCardDetails;
