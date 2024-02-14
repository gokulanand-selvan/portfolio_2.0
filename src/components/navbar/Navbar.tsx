import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <span>Home</span>
        <span onClick={() => navigate("/explore")}>About</span>
        <span>Resume</span>
        <span>Project</span>
      </div>
    </div>
  );
}

export default Navbar;
