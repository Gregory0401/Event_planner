import React, { useState } from 'react';
import s from './HomeView.module.css';
import Dropdown from '../dropdown/Dropdown';
import EventCard from '../components/EventCard';
import DropdownPriority from '../dropdown/DropdownPriority';
import { NavLink } from 'react-router-dom';

function HomeView({ tasks, detailsEvent }) {
  const [value, setValue] = useState('showAll');
  const [value2, setValue2] = useState('showAll');

  function handleSelected(value, value2) {
    setValue(value);
  }

  function handleSelectedPriority(value2) {
    setValue2(value2);
    console.log(value2);
  }

  const levelHard = tasks.map(task => {
    if (value2 === 'showAll') {
      return <EventCard task={task} detailsEvent={detailsEvent} />;
    }
    if (value2 === 'high') {
      return (
        value2 === task.priority && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value2 === 'medium') {
      return (
        value2 === task.priority && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value2 === 'low') {
      return (
        value2 === task.priority && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    return console.log(1);
  });

  const nameCategory = tasks.map(task => {
    if (value === 'showAll') {
      return <EventCard task={task} detailsEvent={detailsEvent} />;
    }
    if (value === 'art') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value === 'music') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value === 'business') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value === 'party') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value === 'conference') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value === 'workshop') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value === 'sport') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    if (value === 'party') {
      return (
        value === task.category && (
          <EventCard task={task} detailsEvent={detailsEvent} />
        )
      );
    }
    return console.log(1);
  });
  // const screenWidth = window.innerWidth;

  return (
    <>
      <div className={s.containerM}>
        <div className={s.container_nav}>
          <div className={s.h2}>My events</div>
          <div className={s.nav}>
            <div className={s.nav_button}>
              <Dropdown handleSelected={handleSelected} value={value} />
            </div>
            <div className={s.nav_button}>
              <DropdownPriority
                handleSelectedPriority={handleSelectedPriority}
                value2={value2}
              />
            </div>
            <div className={s.nav_button}>
              <NavLink to="/create" className={s.link_button}>
                <button className={s.buttonAdd}>
                  <div className={s.plus}></div>
                  <div className={s.buttonText}>Add new event</div>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {!tasks.length > 0 && <div className={s.text}>No Events</div>}
        <div className={s.containerCards}>
          {levelHard.filter(
            value =>
              (value = value2 === 'high') ||
              (value = value2 === 'medium') ||
              (value = value2 === 'low')
          )}

          {nameCategory.filter(
            value =>
              (value = value2 === 'showAll') ||
              (value = value2 === 'music') ||
              (value = value2 === 'art') ||
              (value = value2 === 'business') ||
              (value = value2 === 'party')
          )}
        </div>
      </div>
    </>
  );
}

export default HomeView;
