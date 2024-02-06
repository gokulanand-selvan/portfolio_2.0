import styles from "./styles.module.css";
import { FaFileAlt, FaList, FaPhone, FaUserAlt } from "react-icons/fa";

function ConentNavbar() {
  return (
    <div className={styles.contentNavbarConatiner}>
      <ul>
        <li>
          <a href="">
            <FaUserAlt />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="">
            <FaList />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="">
            <FaFileAlt />
            <span>Resume</span>
          </a>
        </li>
        <li>
          <a href="">
            <FaPhone />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ConentNavbar;
