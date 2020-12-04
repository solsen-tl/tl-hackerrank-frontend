import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header className={style.header}>
    <h1>Jokes For Everyone</h1>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
    </nav>
  </header>
);

export default Header;