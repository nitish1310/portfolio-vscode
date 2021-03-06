import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/json_icon.svg" filename="skills.json" path="/articles" />
      <Tab
        icon="https://img.icons8.com/color/48/000000/services--v1.png"
        filename="education.js"
        path="/education"
      />
      <Tab
        icon="/sass_icon.png"
        filename="experience.sass"
        path="/experience"
      />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
