import s from './AppBar.module.css';

function AppBar() {
  return (
    <>
      <div className={s.container}>
        <header className={s.header}>Event Planner</header>
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
    </>
  );
}
export default AppBar;
