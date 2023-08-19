import React from 'react';
import s from '../components/EventCardDetails.module.css';
import EventCardDetails from '../components/EventCardDetails';
import { NavLink } from 'react-router-dom';

function DetailsEvent({ editTask, deleteTask, card, detailsEvent }) {
  return (
    <div className={s.containerM}>
      <NavLink to="/" className={s.link}>
        <div className={s.arrow}></div>
        <div className={s.back}>Back</div>
      </NavLink>
      <div className={s.container_h2}>
        <h2 clasName={s.h2}>Galery opening</h2>
      </div>
      {card.map(task => {
        return (
          <EventCardDetails
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            detailsEvent={detailsEvent}
          />
        );
      })}
    </div>
  );
}
export default DetailsEvent;
