import styles from "./styles.module.css";
import catVid from "../../assets/production_id_3969452 (2160p) (1).mp4";

function ProfileIntro() {
  return (
    <div className={styles.introContainer}>
      <video autoPlay muted loop id={styles.vid}>
        <source src={catVid} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className={styles.overlayContainer}>
        <div className={styles.overlayContent}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
