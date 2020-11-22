import React, { Component } from 'react'
import history from "../../Routing/history";
import "./SavedCourses.css";
import CoursesTable from "./CoursesTable";

export class SavedCourses extends Component {
  render() {
    return (
      <div className="SavedCourses">
        <div className="topnav">
          <p>
            {" "}
            <a type="home" href ="" onClick={() => history.push("/home")}>Home</a>
            <br/>
          </p>
        </div>
        <div className="description">
          Here you can save courses to enroll them once it's your enrolment turn.
          <br/>
          <select type="semesterDetails">
            <option value="0">Select Semester</option>
            <option value="1">Fall 2020</option>
            <option value="2">Spring 2021</option>
            <option value="firstSummer">First Summer 2021 (4 weeks)</option>
            <option value="secondSummer">Second Summer 2021 (4 weeks)</option>
            <option value="extendedSummer">Extended Summer 2021 (6 weeks)</option>
          </select>
          <button type="enroll">Enroll</button>
          <button type="remove">Remove</button>
        </div>
        <div className="courses">
          <CoursesTable/>
        </div>
      </div>
    )
  }
}

export default SavedCourses
