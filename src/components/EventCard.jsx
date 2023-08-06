import s from '../pages/DetailsEvent.module.css';
import { NavLink } from 'react-router-dom';

function EventCard({ task, detailsEvent }) {
  return (
    <ul className={s.card}>
      <div className={s.image}>
        {task.category === 'art' && <li className={s.art}></li>}
        {task.category === 'business' && <li className={s.business}></li>}
        {task.category === 'party' && <li className={s.party}></li>}
        {task.category === 'music' && <li className={s.music}></li>}
        {task.category === 'workshop' && <li className={s.workshop}></li>}
        {task.category === 'conference' && <li className={s.conference}></li>}
        {task.category === 'sport' && <li className={s.sport}></li>}
      </div>
      <div className={s.info}>
        <li className={s.category}>{task.category}</li>

        <li className={s.priority}>
          {task.priority === 'high' && <li className={s.high}>high</li>}
          {task.priority === 'medium' && <li className={s.medium}>medium</li>}
          {task.priority === 'low' && <li className={s.low}>low</li>}
        </li>
      </div>
      <li className={s.item}>
        {task.date}
        <span className={s.span}>at</span>
        {task.time}
        <span className={s.spanLocation}>{task.location}</span>
      </li>
      <li className={s.title}>{task.name}</li>
      <li className={s.description}>{task.description}</li>
      <NavLink to="/details" className={s.link}>
        <button
          type="button"
          className={s.button}
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
