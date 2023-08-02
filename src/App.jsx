import React, { useState, useEffect } from 'react';
import { Routes } from 'react-router';
import { Route, Navigate } from 'react-router-dom';
import HomeView from './pages/HomeView';
import CreateEvent from './pages/CreateEvent';
import DetailsEvent from './pages/DetailsEvent';
import AppBar from './components/AppBar';
import { nanoid } from 'nanoid';
// import Footer from './components/Footer';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState([]);
  const [card, setCard] = useState([]);

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
  }
  function handleChangePriority(e) {
    setPriority(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTask(name, date, description, category, priority);
    setName('');
    setDescription('');
    setDate('');
  }

  function addTask(name, date, description, category, priority) {
    const newTask = {
      id: 'todo-' + nanoid(),
      name: name,
      date: date,
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
    // console.log(remainingTasks);
    // console.log(id);
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

  // const handleChangeDescriptionEdit = e => {
  //   setDescription(e.target.value);
  //   // console.log(e.target.value);
  // };
  // const handleChangeDateEdit = e => {
  //   setDate(e.target.value);
  //   editTask(date);
  // };
  // const handleChangeEdit = e => {
  //   setName(e.target.value);
  // };

  // function handleSubmit2(e) {
  //   e.preventDefault();
  //   // console.log(name, date, description);
  //   editTask(name, date, description);
  // }

  // function editTask2(id) {
  //   editTask(id);
  // }
  // function editTask(id, name, date, description) {
  //   console.log(id, name, date, description);
  // }
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
              // name={name}
              // date={date}
              // description={description}
              // key={tasks.id}
              // handleChangeDescriptionEdit={handleChangeDescriptionEdit}
              // handleChangeDateEdit={handleChangeDateEdit}
              // handleChangeEdit={handleChangeEdit}
              // handleSubmit2={handleSubmit2}
              // editTask2={editTask2}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
