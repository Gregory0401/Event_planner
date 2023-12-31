import React, { useState, useEffect } from 'react';
import { Routes } from 'react-router';
import { Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar';
import { nanoid } from 'nanoid';
import s from './components/AppBar.module.css';
import HomeView from './pages/HomeView';
import EditView from './pages/EditView';
import CreateEvent from 'pages/CreateEvent';
import DetailsEvent from './pages/DetailsEvent';

// const EditView = lazy(() => import('./pages/EditView'));
// const CreateEvent = lazy(() => import('./pages/CreateEvent'));
// const DetailsEvent = lazy(() => import('./pages/DetailsEvent.module.css'));

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
  function handleChangeTimeEdit(e) {
    setTime(e.target.value);
  }
  function handleChangeLocation(e) {
    setLocation(e.target.value);
  }
  function handleChangeLocationEdit(e) {
    setLocation(e.target.value);
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleChangeEdit(e) {
    setName(e.target.value);
  }
  function handleChangeDate(e) {
    setDate(e.target.value);
  }
  function handleChangeDateEdit(e) {
    setDate(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleChangeDescriptionEdit(e) {
    setDescription(e.target.value);
  }
  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }
  function handleChangeCategoryEdit(e) {
    setCategory(e.target.value);
  }
  function handleChangePriority(e) {
    setPriority(e.target.value);
  }
  function handleChangePriorityEdit(e) {
    setPriority(e.target.value);
  }
  function handleSubmitEdit(e) {
    e.preventDefault();
    addEditTask(
      editCard,
      name,
      date,
      time,
      location,
      description,
      category,
      priority
    );
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
    };
    setTasks([...tasks, newTask]);
  }

  function addEditTask(
    editCard,
    name,
    date,
    time,
    location,
    description,
    category,
    priority
  ) {
    const remainingTasks = tasks.filter(task => editCard.id !== task.id);
    const itemUpdate = {
      id: editCard.id,
      name: name.length > 0 ? name : editCard.name,
      date: date.length > 0 ? date : editCard.date,
      time: time.length > 0 ? time : editCard.time,
      location: location.length > 0 ? location : editCard.location,
      description: description.length > 0 ? description : editCard.description,
      category: category.length > 0 ? category : editCard.category,
      priority: priority.length > 0 ? priority : editCard.priority,
    };
    setCard([itemUpdate]);

    setTasks([...remainingTasks, itemUpdate]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const editTask = task => {
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
      <div className={s.main_container}>
        <div>{detailsEvent}</div>
        <Routes>
          <Route
            path="/"
            element={<HomeView tasks={tasks} detailsEvent={detailsEvent} />}
          />

          <Route
            path="/create"
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
            element={
              <EditView
                editCard={editCard}
                handleSubmitEdit={handleSubmitEdit}
                handleChangeDescriptionEdit={handleChangeDescriptionEdit}
                handleChangeEdit={handleChangeEdit}
                handleChangeDateEdit={handleChangeDateEdit}
                handleChangeTimeEdit={handleChangeTimeEdit}
                handleChangeLocationEdit={handleChangeLocationEdit}
                handleChangeCategoryEdit={handleChangeCategoryEdit}
                handleChangePriorityEdit={handleChangePriorityEdit}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
