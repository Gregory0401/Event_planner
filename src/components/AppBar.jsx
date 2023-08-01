import Navigation from "./Navigation";
import s from "./AppBar.module.css";

function AppBar() {
  return (
    <>
      <div className={s.container}>
        <header className={s.header}>Event Planner</header>
        <Navigation />
      </div>
    </>
  );
}
export default AppBar;
