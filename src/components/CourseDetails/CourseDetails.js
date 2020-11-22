import React, { Component } from 'react'
import history from "../../Routing/history";
import "./CourseDetails.css";
import SectionsTable from "./SectionsTable";

export class CourseDetails extends Component {
  render() {
    const course = this.props.location.state
    console.log(course);

    return (
      <div className="CourseDetails">
        <div className="topnav">
          <p>
            {" "}
            <a type="home" href ="" onClick={() => history.push("/home")}>Home</a>
            <a href ="" onClick={() => history.push("/saved-courses")}>Saved Courses</a>
            <br/>
          </p>
        </div>
        <div className="description">
          {course.name}
          <br/>
          Credits: {course.credits}
          <br/>
          {course.description}
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
          <button type="save">Save</button>
        </div>
        <div className="sections">
          <SectionsTable/>
        </div>
      </div>
    )
  }
}

export default CourseDetails;
