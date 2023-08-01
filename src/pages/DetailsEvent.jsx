import React from "react";
import s from "./DetailsEvent.module.css";
import EventCardDetails from "../components/EventCardDetails";

function DetailsEvent({
  tasks,
  deleteTask,
  handleChangeDescriptionEdit,
  handleChangeDateEdit,
  handleChangeEdit,
  handleSubmit2,
  editTask2,
}) {
  return (
    <div className={s.containerM}>
      {tasks.length === 0 ? (
        <div className={s.text}>No Events</div>
      ) : (
        tasks.map((task) => {
          return (
            <EventCardDetails
              task={task}
              deleteTask={deleteTask}
              handleChangeDescriptionEdit={handleChangeDescriptionEdit}
              handleChangeDateEdit={handleChangeDateEdit}
              handleChangeEdit={handleChangeEdit}
              handleSubmit2={handleSubmit2}
              editTask2={editTask2}
            />
          );
        })
      )}
    </div>
  );
}
export default DetailsEvent;
