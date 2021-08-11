import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";
import { FaTerminal, FaCode, FaDatabase } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { BsTriangleFill } from "react-icons/bs";

// import NextJsIcon from "./nextJsIcon.png";
import Image from "next/image";

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <div className={styles.flexItem}>
        <h1>
          <FaCode />
          <span className={styles.space}>Tech Skills</span>
        </h1>
      </div>

      <hr />
      <div className={styles.row}>
        <div className={styles.columnLeft}>
          <div className={styles.boxRounededCorner}>
            <div className={styles.flexItem}>
              <h3>
                <FaTerminal />
                <span className={styles.space}>Programming Languages</span>
              </h3>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" />
              <span>JavaScript</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
              <span>HTML5</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/css3.png" />
              <span>CSS3</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/python--v1.png" />
              <span>Python</span>
            </div>
          </div>
          <div className={styles.comment}>&lt; !-- Keep Scrolling -- &gt;</div>
          <div className={styles.boxRounededCorner}>
            <div className={styles.flexItem}>
              <h3>
                <VscLibrary />
                <span className={styles.space}>Libraries/ Frameworks</span>
              </h3>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" />
              <span>React</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/redux.png" />
              <span>Redux</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
              <span>Node.js</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/material-ui.png" />
              <span>Material UI</span>
            </div>
            <div className={styles.flexItem}>
              {/* <Image src="/nextJsIcon.png" width={48} height={48} /> */}
              <img src="nextJsIcon.jpg" width={48} height={48} />
              <span>Next.js</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/nolan/58/flask.png" />
              <span>Flask</span>
            </div>
          </div>
          <div className={styles.comment}>&lt; !-- Keep Scrolling -- &gt;</div>
          <div className={styles.boxRounededCorner}>
            <div className={styles.flexItem}>
              <h3>
                <FaDatabase />
                <span className={styles.space}>Databases</span>
              </h3>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" />
              <span>MySQL</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png" />
              <span>Microsoft SQL Serve</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles.comment}>&lt; !-- Keep Scrolling -- &gt;</div>
          <div className={styles.boxRounededCorner}>
            <div className={styles.flexItem}>
              <h3>
                <FaDatabase />
                <span className={styles.space}>Deployment and Platforms</span>
              </h3>
            </div>
            <div className={styles.flexItem}>
              <img src="aws.png" width={48} height={48} />
              <span>Amazon Web Services</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/firebase.png" />
              <span>Firebase</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/google-cloud-platform.png" />
              <span>Google Cloud Platform</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/color/48/000000/heroku.png" />
              <span>Heroku</span>
            </div>
            <div className={styles.flexItem}>
              <img
                src="https://iconape.com/wp-content/files/dw/349197/svg/netlify-seeklogo.com.svg"
                width={48}
                height={48}
              />
              <span>Netlify</span>
            </div>
            <div className={styles.flexItem}>
              {/* <img src="https://img.icons8.com/material-rounded/48/000000/triangle-stroked--v1.png" /> */}
              <BsTriangleFill size={48} />
              <span>Vercel</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/fluency/48/000000/github.png" />
              <span>GitHub</span>
            </div>
            <div className={styles.flexItem}>
              <img src="https://img.icons8.com/fluency/48/000000/docker.png" />
              <span>Docker</span>
            </div>
          </div>
        </div>
        <div className={(styles.columnRight, styles.image)}>
          <Image src="/aboutImg.gif" layout="fill" objectFit="contain" />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Skills" },
  };
}

export default ArticlesPage;
