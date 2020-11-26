import React, { Component } from 'react'
import history from "../../Routing/history";
import { Link } from 'react-router-dom';
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class Search extends Component {
  state = {
    query: "",
    semester: "0",
    courses: [],
    loading: false,
    currentPage: 1,
    coursesPerPage: 10
  };

  fetchCourses = async () => {
    // create query dictionary
    const searchQuery = { 
      'name' : this.state.query
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
    e.preventDefault();
    if (this.validateFields()) {
      this.fetchCourses();
    } else {
      console.log("invalid fields");
    }
  }

  validateFields = () => {
    // if search bar is empty 
    if (this.state.query.length === 0) {
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
            <a href ="" onClick={() => history.push("/saved-courses")}>Saved Courses</a>
            <br/>
          </p>
        </div>
        <div className="searchBar">
          <form onSubmit={this.handleSubmit}>
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
                <option value="0">Select Semester</option>
                <option value="1">Fall 2020</option>
                <option value="2">Spring 2021</option>
                <option value="3">First Summer 2021 (4 weeks)</option>
                <option value="4">Second Summer 2021 (4 weeks)</option>
                <option value="5">Extended Summer 2021 (6 weeks)</option>
              </select>
            </div>
          </form>
        </div>
          <ul type="courses" >
            <p>Here you can search for courses. Click on them to see details, sections, and be able to enroll or save.</p>
              {currentCourses.map(course => (
                <Link key={course.id} to={{
                  pathname: "/course-details",
                  state: course
                  }}>
                  <li key={course.id} className="list-group-item">
                    <div className="titleName">{course.regular_name}</div>
                    {course.name}
                    <br/>
                    Credits: {course.credits}
                    <br/>
                    {course.description}
                  </li>
                </Link>
              ))}
          </ul>
      </div>
    )
  }
}

export default Search;