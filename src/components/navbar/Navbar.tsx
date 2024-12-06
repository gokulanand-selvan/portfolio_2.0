import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <span onClick={() => navigate("/explore")}>About</span>
      </div>
    </div>
  );
}

export default Navbar;
