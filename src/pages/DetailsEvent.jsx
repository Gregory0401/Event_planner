import React from 'react';
import s from './DetailsEvent.module.css';
import EventCardDetails from '../components/EventCardDetails';
import { NavLink } from 'react-router-dom';

function DetailsEvent({ tasks, deleteTask, card }) {
  console.log(1);

  return (
    <div className={s.containerM}>
      <NavLink to="/" className={s.link}>
        <button type="button"> back</button>
      </NavLink>
      {card.map(task => {
        return (
          <EventCardDetails
            task={task}
            deleteTask={deleteTask}
            // handleChangeDescriptionEdit={handleChangeDescriptionEdit}
            // handleChangeDateEdit={handleChangeDateEdit}
            // handleChangeEdit={handleChangeEdit}
            card={card}
          />
        );
      })}
    </div>
  );
}
export default DetailsEvent;
