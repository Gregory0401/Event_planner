import s from "../pages/DetailsEvent.module.css";

function EventCard({ task }) {
  return (
    <ul className={s.card}>
      <li className={s.title}>{task.category}</li>
      <li className={s.title}>{task.name}</li>
      <li className={s.item}>{task.date}</li>
      {task.priority === "height" && <li className={s.p_height}></li>}
      {task.priority === "medium" && <li className={s.p_medium}></li>}
      {task.priority === "low" && <li className={s.p_low}></li>}
    </ul>
  );
}

export default EventCard;
