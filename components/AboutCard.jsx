import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/AboutCard.module.css";
import { FaUserTie, FaDownload } from "react-icons/fa";

const AboutCard = ({}) => {
  const router = useRouter();

  return (
    <div>
      <h1>
        <FaUserTie />
        <span className={styles.space}>About Me</span>
      </h1>
      <hr />
      <div className={styles.container}>
        <div className={styles.column1}>
          <h2 className={styles.heading}>
            Hi There! <span className={styles.wave}>👋🏻</span>
          </h2>
          <h2 className={styles.headingName}>
            I'M<strong class={styles.mainName}> Nitish Soman</strong>
          </h2>
          <p>
            A passionate Frontend Web Developer and I am a Graduate of Computer
            Science major with 4+ years of work experience working across the
            Frontend of web application development. I have built a few projects
            myself and I am actively looking for a role where I can grow and
            learn from other experienced team members. Leverage technical,
            analytical, and problem-solving skills to create dynamic, high-speed
            websites, apps, and platforms fueling competitive advantage and
            revenue growth.
          </p>
          <div className={styles.social}>
            <span className={styles.scoialImg}>
              <Image
                src="https://img.icons8.com/nolan/64/github.png"
                height={50}
                width={50}
              />
            </span>
            <span className={styles.scoialImg}>
              <Image
                src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                height={50}
                width={50}
              />
            </span>
            <span className={styles.scoialImg}>
              <Image
                src="https://img.icons8.com/color/48/000000/gmail-new.png"
                height={50}
                width={50}
              />
            </span>
            <span className={styles.scoialImg}>
              <Image
                src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                height={50}
                width={50}
              />
            </span>
            <span className={styles.scoialImg}>
              <Image
                src="https://img.icons8.com/fluency/48/000000/facebook.png"
                height={50}
                width={50}
              />
            </span>
            <link
              href="https://fonts.googleapis.com/css?family=Prompt"
              rel="stylesheet"
            />
            <a
              href="https://drive.google.com/file/d/1f4QZuGo5eAr0hfGuHC9zWDlA10LiXRfl/view?usp=sharing"
              target="_blank"
            >
              <div className={styles.button}>
                <FaDownload />
                <span className={styles.btnSpace}>Download Resume</span>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.column2}>
          <Image
            // className={styles.image}
            src="/profile-pic.png"
            height={300}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
