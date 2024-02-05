import styles from "./styles.module.css";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <span>Home</span>
        <span>About</span>
        <span>Resume</span>
        <span>Project</span>
      </div>
    </div>
  );
}

export default Navbar;
