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

  return (
    <div>
      <h1 className={styles.title}>Timeline</h1>
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
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={<WorkIcon />}
            >
              <span className={styles.fontColor}>
                <h3 className="vertical-timeline-element-title">
                  <span>{element.title}</span>
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
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
