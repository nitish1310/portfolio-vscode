import React from "react";
import styles from "../styles/Experience.module.css";
import { FaUserGraduate } from "react-icons/fa";
// import { ReactComponent as SchoolIcon } from "./school.svg";

import educationList from "../pages/api/educationList";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { FaTerminal, FaCode, FaDatabase } from "react-icons/fa";

function Education() {
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1>
        <FaUserGraduate />
        <span className={styles.space}>Education</span>
      </h1>
      <hr />
      <VerticalTimeline>
        {educationList.map((element) => {
          let isWorkIcon = element.icon === "school";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              className={styles.date}
              iconStyle={schoolIconStyles}
              icon={<FaUserGraduate />}
            >
              <span className={styles.fontColor}>
                <h3 className="vertical-timeline-element-title">
                  <span>{element.university}</span>
                </h3>
                <h4 className="vertical-timeline-element-title">
                  <span>{element.degree} in </span>
                  <span>{element.major}</span>
                </h4>
                <h4 className="vertical-timeline-element-title">
                  <span> {element.location}</span>
                </h4>
                {/* <p id="description">{element.description}</p> */}
                <div className={styles.tags}>
                  {element.courses?.map((course) => (
                    <span key={course} className={styles.tags}>
                      {course}
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

export default Education;
