import React, { Component } from "react";
import history from "../../Routing/history";
import "./SavedCourses.css";
import CoursesTable from "./CoursesTable";
import axios from "axios";

export class SavedCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      loading: false,
      selected: [], // course sections that are selected in the sections table
    };

    this.fetchSections();
  }

  handleSelect = (input) => (e) => {
    let oldArray = this.state[input]; // get selected values from state
    let found = false;

    // check if the section that we clicked had previously been selected
    for (var i = 0; i < oldArray.length; i += 1) {
      if (oldArray[i] === e.target.value) {
        found = true;
      }
    }

    let newArray;

    // if the section was already selected then we need to remove it from our state
    if (found) {
      newArray = [];
      let index = 0;

      // loop through our selected sections and add them all to newArray except for the previously selected section
      for (var j = 0; j < oldArray.length; j += 1) {
        if (oldArray[j] !== e.target.value) {
          newArray[index] = oldArray[j];
          index += 1;
        }
      }
    } else {
      // else the section was not already selected, so we add it to state
      newArray = oldArray.concat(e.target.value);
    }

    this.setState({ [input]: newArray });
  };

  fetchSections = async () => {
    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const loading = true;
    this.setState({ loading });

    axios.get("saved_sections", { headers }).then((res) => {
      // save sections obtained from get request
      const sections = res.data;
      this.setState({ sections });
      const loading = false;
      this.setState({ loading });
      console.log(res.data);
    });
  };

  enrollSelectedCourses = async () => {
    //***********LOGIC OF NOT ENROLLING TWO SECTIONS OF SAME CLASS *****************/

    const sectionIds = this.state.selected; // there should be only one element in this.state.selected

    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const loading = true;
    this.setState({ loading });

    // send post request
    for (var i = 0; i < sectionIds.length; i += 1) {
      axios
        .post("enroll_course", { sectionId: sectionIds[i] }, { headers })
        .then((res) => {
          // axios
          //   .delete("remove_section", { data: { sectionId: sectionIds[i] },headers })
          //   .then((res) => {
          //     this.fetchSections();
          //   });
        });
    }
  };

  removeSelectedCourses = async () => {
    const sectionIds = this.state.selected; // there should be only one element in this.state.selected

    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json; charset=utf-8' 
    };

    const loading = true;
    this.setState({ loading });

    // send post request
    axios.post("remove_section", {sectionIds: sectionIds}, { headers })
   // axios.delete("remove_section", {headers: headers, body: {sectionIds: sectionIds}})
      .then((res) => {
        loading = false;
        this.setState({ loading });
        this.setState({ selected: [] });
      });
  };

  render() {
    return (
      <div className="SavedCourses">
        <div className="topnav">
          <p>
            <a type="home" href="" onClick={() => history.push("/home")}>
              Home
            </a>
            <a type="search" href="" onClick={() => history.push("/search")}>
              Course Search
            </a>
            <br />
          </p>
        </div>
        <div className="description">
          Here you can save courses to enroll them once it's your enrolment
          turn.
          <br />
          <select type="semesterDetails">
            <option value="0">Select Semester</option>
            <option value="1">Fall 2020</option>
            <option value="2">Spring 2021</option>
            <option value="firstSummer">First Summer 2021 (4 weeks)</option>
            <option value="secondSummer">Second Summer 2021 (4 weeks)</option>
            <option value="extendedSummer">
              Extended Summer 2021 (6 weeks)
            </option>
          </select>
          <button type="enroll" onClick={this.enrollSelectedCourses}>
            Enroll
          </button>
          <button type="remove" onClick={this.removeSelectedCourses}>
            Remove
          </button>
        </div>
        <div className="courses">
          <CoursesTable
            withdraw={false}
            sections={this.state.sections}
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}

export default SavedCourses;
