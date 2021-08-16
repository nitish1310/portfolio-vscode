import React from "react";
import styles from "../styles/Experience.module.css";
import { FaBriefcase as WorkIcon } from "react-icons/fa";
// import { ReactComponent as SchoolIcon } from "./school.svg";

import experienceList from "../pages/api/experienceList";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Experience() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  //   let result = Object.keys(experienceList).map((key) =>
  //     console.log(experienceList[key].tags)
  //   );

  return (
    <div>
      <h1>
        <WorkIcon />
        <span className={styles.space}>Experience</span>
      </h1>
      <hr />
      <VerticalTimeline>
        {experienceList.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              className={styles.date}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={<WorkIcon />}
            >
              <span className={styles.fontColor}>
                <h3 className="vertical-timeline-element-title">
                  <span>{element.title}</span>
                </h3>
                <h4 className="vertical-timeline-element-title">
                  <span>{element.company}, </span>
                  <span> {element.location}</span>
                </h4>
                {/* <p id="description">{element.description}</p> */}
                <div className={styles.tags}>
                  {element.tags?.map((tag) => (
                    <span key={tag} className={styles.tags}>
                      {tag}
                    </span>
                  ))}
                </div>
              </span>
              {/* {showButton && (
                <a className={(styles.button, styles.workButton)} href="/">
                  {element.buttonText}
                </a>
              )} */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
