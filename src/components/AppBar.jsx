import React, { useState } from 'react';
import s from './AppBar.module.css';

function AppBar(tasks) {
  const [filter, setFilter] = useState('');

  const handleInputChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  function getFilteredEvents() {
    try {
      if (!filter) {
        return tasks;
      }
      const normalizedFilter = filter.toLocaleLowerCase();
      const filteredEvents = tasks.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
      });
      return filteredEvents;
    } catch (e) {
      console.log('error');
    }
  }
  // const eventsFiltered = getFilteredEvents();
  return (
    <>
      <div className={s.container}>
        <header className={s.header}>Event Planner</header>

        <input
          placeholder="Search by keywords"
          name="filter"
          value={filter}
          onChange={handleInputChange}
        />
      </div>
      {/* <div items={eventsFiltered}></div> */}
    </>
  );
}
export default AppBar;
