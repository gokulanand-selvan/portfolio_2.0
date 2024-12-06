import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { FaFileAlt, FaHome, FaList, FaPhone, FaUserAlt } from "react-icons/fa";

function ConentNavbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.contentNavbarConatiner}>
      <ul>
        <li onClick={() => navigate("/")}>
          <a href="">
            <FaHome />
            <span>Home</span>
          </a>
        </li>
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
            <span>Projects</span>
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
