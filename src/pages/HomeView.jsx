import React, { useState } from "react";
import s from "./HomeView.module.css";
import Dropdown from "../dropdown/Dropdown";
import EventCard from "../components/EventCard";
import DropdownPriority from "../dropdown/DropdownPriority";

function HomeView({ tasks }) {
  const [value, setValue] = useState("showAll");
  const [value2, setValue2] = useState("showAll");

  function handleSelected(value, value2) {
    setValue(value);
  }

  function handleSelectedPriority(value2) {
    setValue2(value2);
    console.log(value2);
  }

  const levelHard = tasks.map((task) => {
    if (value2 === "showAll") {
      return <EventCard task={task} />;
    }
    if (value2 === "height") {
      return value2 === task.priority && <EventCard task={task} />;
    }
    if (value2 === "medium") {
      return value2 === task.priority && <EventCard task={task} />;
    }
    if (value2 === "low") {
      return value2 === task.priority && <EventCard task={task} />;
    }
    return console.log(1);
  });

  const nameCategory = tasks.map((task) => {
    if (value === "showAll") {
      return <EventCard task={task} />;
    }
    if (value === "other") {
      return value === task.category && <EventCard task={task} />;
    }
    if (value === "home") {
      return value === task.category && <EventCard task={task} />;
    }
    if (value === "work") {
      return value === task.category && <EventCard task={task} />;
    }
    if (value === "purchases") {
      return value === task.category && <EventCard task={task} />;
    }
    return console.log(1);
  });

  return (
    <>
      <div className={s.containerM}>
        {tasks.length > 0 ? (
          <>
            <Dropdown handleSelected={handleSelected} value={value} />
            <DropdownPriority
              handleSelectedPriority={handleSelectedPriority}
              value2={value2}
            />
          </>
        ) : (
          <div className={s.text}>No Events</div>
        )}
        <div className={s.containerCards}>
          {levelHard.filter(
            (value) =>
              (value = value2 === "height") ||
              (value = value2 === "medium") ||
              (value = value2 === "low") ||
              null
          )}

          {nameCategory.filter(
            (value) =>
              (value = value2 === "showAll") ||
              (value = value2 === "other") ||
              (value = value2 === "home") ||
              (value = value2 === "work") ||
              (value = value2 === "purchases")
          )}
        </div>
      </div>
    </>
  );
}

export default HomeView;
