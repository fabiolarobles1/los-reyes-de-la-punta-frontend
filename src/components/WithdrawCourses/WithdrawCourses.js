import React, { Component } from "react";
import history from "../../Routing/history";
import CoursesTable from "../../components/SavedCourses/CoursesTable";
import axios from "axios";
import PopMessage from "../PopMessage";

export class SavedCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      loading: false,
      selected: [],
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
    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const loading = true;
    this.setState({ loading });

    axios.get("student_enrollment", { headers }).then((res) => {
      // save sections obtained from get request
      console.log(res.data);
      const sections = res.data;
      this.setState({ sections });
      const loading = false;
      this.setState({ loading });
    });
  };

  withdrawCourse = async () => {
    const sectionIds = this.state.selected;

    // add token to headers for authorization
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    this.setState({ loading: true });

    // send post request
    axios
      .post("withdraw_course", { sectionIds: sectionIds }, { headers })
      .then((res) => {

        this.setState({ loading: false });
        this.setState({ error: false });
        this.setState({
          message: "All your selected section were succesfully withdrawed.",
        });

        
        this.setState({ selected: [] });
        this.fetchSections();
        this.showModal();
      })
      .catch(err => {
        this.setState({ loading: false });
        this.setState({ error: true });
        this.setState({
          message: "There was an error during the withdrawal of your courses. Try Again.",
        });

        this.setState({ selected: [] });
        this.fetchSections();
        this.showModal();
      })
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

  render() {
    return (
      <div className="WithdrawCourses">
        <div className="topnav">
          <p>
            {" "}
            <a type="home" href="" onClick={() => history.push("/home")}>
              Home
            </a>
            <a href="" onClick={() => history.push("/saved-courses")}>
              Saved Courses
            </a>
            <br />
          </p>
        </div>
        <div className="description">
          <h1>Withdraw</h1>
          <p>
            Here you can drop a courses you already enrolled for next semester.
          </p>
          <button type="remove" onClick={this.withdrawCourse}>
            Withdraw
          </button>
        </div>
        <div className="courses">
          <CoursesTable
            withdraw={true}
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
