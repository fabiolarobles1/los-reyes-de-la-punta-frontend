import React, { Component } from "react";
import history from "../../Routing/history";
import "./CourseDetails.css";
import SectionsTable from "./SectionsTable";
import axios from "axios";
import PopMessage from "../PopMessage";

export class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      loading: false,
      selected: [], // course sections that are selected in the sections table
      semester: "0",
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

  fetchSections = async () => {
    const courseName = this.props.location.state.name;

    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const loading = true;
    this.setState({ loading });

    axios
      .get("search_sections?search=<" + courseName, { headers })
      .then((res) => {
        // save sections obtained from get request
        const sections = res.data;
        this.setState({ sections });
        const loading = false;
        this.setState({ loading });
      });
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

  enrollCourses = async () => {
    // check how many sections are selected
    if (this.state.selected.length > 1) {
      //error
      this.setState({ error: true });
      this.setState({
        message: "You can only enroll one section of a course",
      });

      //show pop up error
      this.showModal();
    } else {
      const sectionId = this.state.selected[0]; // there should be only one element in this.state.selected

      // add token to headers for authorization
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      this.setState({ loading: true });

      // send post request
      axios
        .post("enroll_course", { sectionId: sectionId }, { headers })
        .then((res) => {
          //no error
          this.setState({ error: false });
          this.setState({
            message: `You have succesfully enrolled ${this.props.location.state.name}`
          });

          this.setState({ selected: [] });

          //show pop up
          this.setState({ loading: false });
          this.showModal();
        })
        .catch((err) => {
          if (err) {
            //set error with message
            this.setState({ error: true });
            this.setState({
              message:
                "There was an error trying to enroll your course. Please, try again.",
            });

            //show pop up
            this.setState({ loading: false });
            this.showModal();
          }
        });
    }
  };

  saveCourses = async () => {
    const sectionIds = this.state.selected;

    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    this.setState({ loading: true });

    // send post request
    axios
      .post("save_section", { sectionIds: sectionIds }, { headers })
      .then((res) => {
        //no error
        this.setState({ error: false });
        this.setState({
          message: `You have succesfully saved ${this.props.location.state.name}. You can check it out on Saved Couses.`
        });

        this.setState({ selected: [] });

        //show pop up
        this.setState({ loading: false });
        this.showModal();
      })
      .catch((error) => {
        //set error with message
        this.setState({ error: true });
        this.setState({
          message:
            "There was an error trying to save your course. Please, try again.",
        });
        
        //show pop up
        this.setState({ loading: false });
        this.showModal();
      });
  };

  // handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const course = this.props.location.state;

    return (
      <div className="CourseDetails">
        <div className="topnav">
          <p>
            {" "}
            <a type="home" href="" onClick={() => history.push("/search")}>
              Search
            </a>
            <a href="" onClick={() => history.push("/saved-courses")}>
              Saved Courses
            </a>
            <br />
          </p>
        </div>
        <div className="description">
          {course.regular_name}
          <br />
          {course.name}
          <br />
          Credits: {course.credits}
          <br />
          {course.description}
          <br />
          <select
            type="semesterDetails"
            onChange={this.handleChange("semester")}
            defaultValue={this.state.semester}
          >
            <option value="0">Select Semester</option>
            <option value="1">Fall 2020</option>
            <option value="2">Spring 2021</option>
            <option value="3">First Summer 2021 (4 weeks)</option>
            <option value="4">Second Summer 2021 (4 weeks)</option>
            <option value="5">Extended Summer 2021 (6 weeks)</option>
          </select>
          <button type="enroll" onClick={this.enrollCourses}>
            Enroll
          </button>
          <button type="save" onClick={this.saveCourses}>
            Save
          </button>
        </div>
        <div className="sections">
          <SectionsTable
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

export default CourseDetails;
