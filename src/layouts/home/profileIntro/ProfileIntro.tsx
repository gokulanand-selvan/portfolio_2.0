import styles from "./styles.module.css";
import catVid from "../../../assets/production_id_3969452 (2160p) (1).mp4";
import avatar from "../../../assets/myImg.jpeg";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

function ProfileIntro() {
  return (
    <div className={styles.introContainer}>
      <video autoPlay muted loop id={styles.vid}>
        <source src={catVid} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className={styles.overlayContainer}>
        <div className={styles.overlayContent}>
          <img src={avatar} alt="avatar" className={styles.image} />
          <div className={styles.myName}>
            <span> - </span> Gokul Anand S <span>-</span>
          </div>
          <div className={styles.myRole}>React + React Native Developer</div>
          {/* <div
            style={{ background: "white", width: "5rem", height: "3px" }}
          ></div> */}
          <div className={styles.mySocial}>
            <a
              href="https://github.com/gokulanand-selvan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill />
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-anand-selvan-657b58199/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              href="https://www.instagram.com/__gk.07__?igsh=MWxuZmQwM2cyeTEycw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
