import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.items}>
        <li className={s.item}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={s.img}></div>
          </a>
        </li>
        <li className={s.item}>
          <a
            href="https://t.me/TheGrigorios/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={s.imgTelegram}></div>
          </a>
        </li>
      </ul>
      <p className={s.text}>Copyright © 2023 Created by Grigoriy Shmoylov.</p>
    </footer>
  );
}
export default Footer;
