import styles from "./styles.module.css";
import pto from "../../assets/myImg.jpeg";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About</h1>
      <div>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className={styles.aboutContent}>
        <img src={pto} alt="avatar" />
        <div>
          <h1>Frontend React + React Native Developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.detialsContianer}>
            <div>
              <ul>
                <li>
                  <b>Birthday</b>: 03/01/1999
                </li>
                <li>
                  <b>Mobile</b>:8754916425
                </li>
                <li>
                  <b>City </b>: Erode,Tamilnadu
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <b>Age</b>: 25
                </li>
                <li>
                  <b>Degree</b>:UG
                </li>
                <li>
                  <b>Email </b>: gokul2848@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
