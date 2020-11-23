import React, { Component } from 'react'
import history from "../../Routing/history";
import CoursesTable from "../../components/SavedCourses/CoursesTable";

export class SavedCourses extends Component {
  render() {
    return (
      <div className="WithdrawCourses">
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
          <button type="remove">Withdraw</button>
        </div>
        <div className="courses">
          <CoursesTable/>
        </div>
      </div>
    )
  }
}

export default SavedCourses