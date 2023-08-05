import React, { useState, useEffect } from 'react';
import { Routes } from 'react-router';
import { Route, Navigate } from 'react-router-dom';
import HomeView from './pages/HomeView';
import CreateEvent from './pages/CreateEvent';
import DetailsEvent from './pages/DetailsEvent';
import AppBar from './components/AppBar';
import { nanoid } from 'nanoid';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState([]);
  const [card, setCard] = useState([]);
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  function handleChangeTime(e) {
    setTime(e.target.value);
  }
  function handleChangeLocation(e) {
    setLocation(e.target.value);
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleChangeDate(e) {
    setDate(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleChangeCategory(e) {
    setCategory(e.target.value);
    console.log(category);
  }
  function handleChangePriority(e) {
    setPriority(e.target.value);
    console.log(priority);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTask(name, date, time, location, description, category, priority);
    setName('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
  }

  function addTask(
    name,
    date,
    time,
    location,
    description,
    category,
    priority
  ) {
    const newTask = {
      id: 'todo-' + nanoid(),
      name: name,
      date: date,
      time: time,
      location: location,
      description: description,
      category: category,
      priority: priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const detailsEvent = id => {
    const detailsTasks = tasks.filter(task => id === task.id);
    setCard(detailsTasks);
    console.log(id);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('card'));
    if (data && data.length > 0) {
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('card', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <AppBar />
      <div>{detailsEvent}</div>
      <Routes>
        <Route
          path="/"
          exact
          element={<HomeView tasks={tasks} detailsEvent={detailsEvent} />}
        />
        <Route
          path="/create"
          exact
          element={
            <CreateEvent
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleChangeDate={handleChangeDate}
              handleChangeDescription={handleChangeDescription}
              handleChangeCategory={handleChangeCategory}
              id={tasks.id}
              name={name}
              date={date}
              description={description}
              category={category}
              handleChangePriority={handleChangePriority}
              handleChangeTime={handleChangeTime}
              time={time}
              handleChangeLocation={handleChangeLocation}
              location={location}
            />
          }
        />
        <Route
          path="/details"
          exact
          element={
            <DetailsEvent
              tasks={tasks}
              deleteTask={deleteTask}
              id={tasks.id}
              card={card}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
