import s from '../pages/DetailsEvent.module.css';
import { NavLink } from 'react-router-dom';

function EventCard({ task, detailsEvent }) {
  // const levelHard = task => {
  //   if (task.priority === 'height') {
  //     return <li className={s.p_height}>High</li>;
  //   }
  //   if (task.priority === 'medium') {
  //     return <li className={s.p_medium}>Medium</li>;
  //   }
  //   if (task.priority === 'low') {
  //     return <li className={s.p_low}>Low</li>;
  //   }
  //   return console.log(1);
  // };
  // function detailsEvent(id) {
  // const detailsTasks = task.filter(task => id === task.id);
  // console.log(detailsTasks);
  // console.log(id);
  // }
  /* {levelHard.filter(
        value =>
          (value = task.priority === 'height') ||
          (value = task.priority === 'medium') ||
          (value = task.priority === 'low')
      )} */

  return (
    <ul className={s.card}>
      <li className={s.category}>{task.category}</li>
      {task.priority === 'height' && <li className={s.p_height}>Hight</li>}
      {task.priority === 'medium' && <li className={s.p_medium}>Medium</li>}
      {task.priority === 'low' && <li className={s.p_low}>Low</li>}
      {task.category === 'art' && <li className={s.art}></li>}
      {task.category === 'business' && <li className={s.business}></li>}
      {task.category === 'party' && <li className={s.party}></li>}
      {task.category === 'music' && <li className={s.music}></li>}
      <li className={s.item}>{task.date}</li>
      <li className={s.title}>{task.name}</li>
      <li className={s.title}>{task.description}</li>
      <NavLink to="/details" className={s.link}>
        <button
          type="button"
          className={s.title}
          onClick={() => {
            detailsEvent(task.id);
          }}
        >
          More info
        </button>
      </NavLink>
    </ul>
  );
}

export default EventCard;
