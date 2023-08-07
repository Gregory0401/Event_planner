import s from './AppBar.module.css';

function AppBar() {
  return (
    <>
      <div className={s.container}>
        <header className={s.header}>Event Planner</header>
      </div>
    </>
  );
}
export default AppBar;
