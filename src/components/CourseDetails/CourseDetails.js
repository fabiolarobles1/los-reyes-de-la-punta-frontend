import React, { Component } from 'react'
import history from "../../Routing/history";
import "./CourseDetails.css";
import SectionsTable from "./SectionsTable";
import axios from "axios";

export class CourseDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [],
      loading: false
    }
    
    this.fetchSections();
  }

  fetchSections = async () => {
    const courseName = this.props.location.state.name;

    // add token to headers for authorization
    const headers = { 'Authorization' : `Bearer ${localStorage.getItem("token")}` };

    const loading = true;
    this.setState({ loading });

    axios.get("search_sections", { headers })
      .then(res => {
        // save sections obtained from get request
        const sections = res.data;
        this.setState({ sections });
        const loading = false;
        this.setState({ loading });
      })
  }

  render() {
    const course = this.props.location.state;

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
          <SectionsTable sections={this.state.sections}/>
        </div>
      </div>
    )
  }
}

export default CourseDetails;
