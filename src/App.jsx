import React, { useState, useEffect } from 'react';
import { Routes } from 'react-router';
import { Route, Navigate } from 'react-router-dom';
import HomeView from './pages/HomeView';
import EditView from './pages/EditView';
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
  const [editCard, setEditCard] = useState(card);

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
    // console.log(category);
  }
  function handleChangePriority(e) {
    setPriority(e.target.value);
    // console.log(priority);
  }
  function handleSubmitEdit(e) {
    e.preventDefault();
    // addEditTask(name, date, time, location, description, category, priority);
    console.log(name, date, time, location, description, category, priority);
    console.log(123);
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
    priority,
    formatMonthYear
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
      formatMonthYear: formatMonthYear,
    };
    setTasks([...tasks, newTask]);
  }

  // function addEditTask(
  //   name,
  //   date,
  //   time,
  //   location,
  //   description,
  //   category,
  //   priority
  // ) {
  // const newTask = {
  //   id: 'todo-' + nanoid(),
  //   name: name,
  //   date: date,
  //   time: time,
  //   location: location,
  //   description: description,
  //   category: category,
  //   priority: priority,
  //   completed: false,
  //   formatMonthYear: formatMonthYear,
  // };
  // setTasks([...tasks, newTask]);
  //   console.log(name, date, time, location, description, category, priority);
  // }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
    console.log(id);
  }

  const editTask = task => {
    // const editingTask = tasks.filter(task => id === task.id);
    setEditCard(task);
  };

  const detailsEvent = id => {
    const detailsTasks = tasks.filter(task => id === task.id);
    setCard(detailsTasks);
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
              editTask={editTask}
            />
          }
        />
        <Route
          path="/details/:edit"
          exact
          element={
            <EditView
              editCard={editCard}
              handleSubmitEdit={handleSubmitEdit}
              // handleChange2={handleChange2}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
