import React from 'react';
import s from '../components/EventCardDetails.module.css';
import EventCardDetails from '../components/EventCardDetails';
import { NavLink } from 'react-router-dom';

function DetailsEvent({ tasks, deleteTask, card }) {
  console.log(1);

  return (
    <div className={s.containerM}>
      <NavLink to="/" className={s.link}>
        <div className={s.arrow}></div>
        <div className={s.back}>Back</div>
      </NavLink>
      <h2 clasName={s.h2}>Galery opening</h2>
      {card.map(task => {
        return (
          <EventCardDetails task={task} deleteTask={deleteTask} card={card} />
        );
      })}
    </div>
  );
}
export default DetailsEvent;