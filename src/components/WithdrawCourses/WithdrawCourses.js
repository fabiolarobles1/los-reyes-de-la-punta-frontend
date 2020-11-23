import React, { Component } from 'react'
import history from "../../Routing/history";
import CoursesTable from "../../components/SavedCourses/CoursesTable";
import axios from "axios";

export class SavedCourses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections:[],
      loading: false,
      selected: [],
    }
    this.fetchSections();
  }

  fetchSections = async () => {

    // add token to headers for authorization
    const headers = { 'Authorization' : `Bearer ${localStorage.getItem("token")}` };

    const loading = true;
    this.setState({ loading });

    axios.get("student_enrollment", { headers })
      .then(res => {
        // save sections obtained from get request
        console.log(res.data);
        const sections = res.data;
        this.setState({ sections });
        const loading = false;
        this.setState({ loading });
      })
  }


  withdrawCourse = async ()=> {
    const headers = { 'Authorization' : `Bearer ${localStorage.getItem("token")}` };

    const loading = true;
    this.setState({ loading });
    
    axios.post()


  }

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
          Here you can drop a courses you already enrolled for next semester.
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

export default SavedCourses;