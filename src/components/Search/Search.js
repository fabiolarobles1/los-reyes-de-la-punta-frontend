import React, { Component } from 'react'
import history from "../../Routing/history";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
  render() {
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
              />
              <span>
                <span>
                  <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                </span>
              </span>
              <select>
                <option value="select">Semester</option>
                <option value="fall">Fall 2020</option>
                <option value="spring">Spring 2021</option>
                <option value="firstSummer">First Summer 2021 (4 weeks)</option>
                <option value="secondSummer">Second Summer 2021 (4 weeks)</option>
                <option value="extendedSummer">Extended Summer 2021 (6 weeks)</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;