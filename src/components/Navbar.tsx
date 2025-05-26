
import {
  Phone,
  Email,
  SocialIcons,
  LoginIcon,
  SearchIcon,
  CartIcon,
  LoveIcon,
} from "./icons/header-icons";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={styles.navDark}>
        <div className={`${styles.contact} ${styles.colMd4}`}>
          <span><Phone /></span>
          <span><Email /></span>
        </div>

        <div className={styles.colMd4}>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>

        <div className={`${styles.social} ${styles.colMd4}`}>
          <div className={styles.mulSocial}>
            <div><SocialIcons /></div>
          </div>
        </div>
      </div>

      <div className={styles.navLight}>
        <span>Bandage</span>

        <div className={styles.colloapesNav}>
          <ul className={styles.navBarNav}>
            <li>Home</li>
            <li className={styles.dropDownToggle}>
              <span>Shop</span>
              <RiArrowDropDownLine />
            </li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>

          <ul className={styles.navBarNav}>
            <li><LoginIcon /></li>
            <li><SearchIcon /></li>
            <li><CartIcon /></li>
            <li><LoveIcon /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
