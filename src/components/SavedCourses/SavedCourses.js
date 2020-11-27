import React, { Component } from "react";
import history from "../../Routing/history";
import "./SavedCourses.css";
import CoursesTable from "./CoursesTable";
import axios from "axios";
import PopMessage from "../PopMessage";

export class SavedCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      loading: false,
      selected: [], // course sections that are selected in the sections table
      modal: false,
      error: false,
      message: "",
    };

    this.fetchSections();
  }

  showModal = () => {
    this.setState({ modal: true });
  };

  hideModal = () => {
    this.setState({ modal: false });
  };

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

    this.setState({ loading: true });
    let error = [];

    sectionIds.forEach((sec) => {
      axios
        .post("enroll_course", { sectionId: sec }, { headers })
        .then((res) => {
          axios({
            method: "DELETE",
            url: "remove_section",
            headers: headers,
            data: { sectionIds: [sec] },
          }).then((res) => this.fetchSections());
        })
        .catch((err) => {
          error.push(sec);
          this.setState({ error: true });
          this.setState({
            message: "There was an error in some of your sections. Try Again.",
          });
        });
    });

    if (error.length == 0 && !this.state.error) {
      this.setState({ error: false });
      this.setState({
        message: "All your selected saved section were succesfully enrolled.",
      });
    } else {
      this.setState({ error: true });
      this.setState({
        message:
          "There was an error enrolling some of your sections. Try Again.",
      });
    }
    this.showModal();
    this.setState({ selected: error });
    this.setState({ loading: false });
    this.fetchSections();
  };

  removeSelectedCourses = async () => {
    const sectionIds = this.state.selected;

    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    };

    const loading = true;
    this.setState({ loading });
    let error = [];

    axios({
      method: "DELETE",
      url: "remove_section",
      headers: headers,
      data: { sectionIds: sectionIds },
    })
      .then((res) => {
        this.setState({ loading: false });
        this.setState({ selected: [] });
        this.setState({ error: false });
        this.setState({
          message: "All your selected saved section were succesfully removed.",
        });
        this.showModal();
        this.fetchSections();
      })
      .catch((err) => {
        this.setState({ error: true });
        this.setState({ loading: false });
        this.setState({
          message:
            "There was an error removing some of your sections. Try Again.",
        });
        this.showModal();
        this.fetchSections();
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
          <h1>Saved Courses</h1>
          <p>
            Here you can see your saved courses. Once it's your enrollment turn,
            you can proceed to enroll them from this screen.
          </p>
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
        <PopMessage
          modal={this.state.modal}
          handleClose={this.hideModal}
          error={this.state.error}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default SavedCourses;
