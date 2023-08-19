import s from './AppBar.module.css';

function AppBar() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <h2 className={s.h2}>Event Planner</h2>
        <div className={s.search_container1}>
          <div className={s.search_container}>
            <input
              placeholder="Search by keywords"
              name="filter"
              className={s.search}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default AppBar;
