import React, { Component } from 'react'
import history from "../../Routing/history";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class Search extends Component {
  state = {
    query: "",
    semester: "",
    courses: [],
    loading: false,
    currentPage: 1,
    coursesPerPage: 10
  };

  fetchCourses = async () => {
    // create query dictionary
    const searchQuery = { 
      'name' : this.state.query, 
      'semestre' : this.state.semester
    };

    // add token to headers for authorization
    const headers = { 'Authorization' : `Bearer ${localStorage.getItem("token")}` };

    const loading = true;
    this.setState({ loading });
    
    // send post request
    axios.post("search_courses", searchQuery, { headers })
      .then(res => {
        // save courses obtained from post request
        const courses = res.data;
        this.setState({ courses });
        const loading = false;
        this.setState({ loading });
      })
  }

  // handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  // when the search button is pressed
  handleSubmit = (e) => {
    if (this.validateFields()) {
      this.fetchCourses();
    } else {
      console.log("invalid fields");
    }
  }

  validateFields = () => {
    // if query is empty OR nothing was selected in semester OR "Semester" was selected
    if (this.state.query.length === 0 || this.state.semester.length === 0 || this.state.semester === "select") {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const {query, semester, courses, currentPage, coursesPerPage} = this.state
    const values = {query, semester, courses, currentPage, coursesPerPage}

    // PAGINATION CODE 
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = values.courses.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => {
      const currentPage = pageNumber;
      this.setState({ currentPage });
    }

    return (
      <div className="Search">
        <div className="topnav">
          <p>
            {" "}
            <a type="home" href ="" onClick={() => history.push("/home")}>Home</a>
            <a href ="" onClick={() => history.push("/home")}>Saved Courses</a>
            <br/>
          </p>
        </div>
        <div class="searchBar">
          <form>
            <div className="search-container">
              <input type="search"
                placeholder="Search for courses"
                onChange={this.handleChange("query")}
                defaultValue={values.query}
              />
              <span onClick={this.handleSubmit}>
                <span type="searchButton">
                  <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                </span>
              </span>
              <select 
                type="semester"
                onChange={this.handleChange("semester")}
                defaultValue={values.semester}>
                <option value="select">Select Semester</option>
                <option value="1">Fall 2020</option>
                <option value="2">Spring 2021</option>
                <option value="firstSummer">First Summer 2021 (4 weeks)</option>
                <option value="secondSummer">Second Summer 2021 (4 weeks)</option>
                <option value="extendedSummer">Extended Summer 2021 (6 weeks)</option>
              </select>
            </div>
          </form>
        </div>
          <ul type="courses">
            {currentCourses.map(course => (
              <li key={course.id} className="list-group-item">
                {course.name}
                <br/>
                Credits: {course.credits}
                <br/>
                {course.description}
              </li>
            ))}
          </ul>
      </div>
    )
  }
}

export default Search;