import React, { Component } from "react";
import history from "../../Routing/history";
import "./Home.css";
import "../Login/Login.css";
import jwt_decode from "jwt-decode";
import Table from "../Table"
import SearchBar from "../SearchBar"
import Menu from "../Menu"
import axios from "axios";

class home extends Component {

  logout = () => {
    localStorage.clear();
    history.push("/");
  }

  state = {
    //gets the courses that are supposed to take next semester
    left_table: [], 
    right_table: []
  }

  menu = [{title: 'Enrollment for next semester', route:'/search', icon: 'enrollment.png'}, {title:'Dropdown a course', route:'/', icon:'dropdown.png'}]

  //looks for the courses that match the search
  filtering = (s) => {

    axios
    .post("search_courses",{name: s},{headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then((res) => {
      console.log(res.data)
      this.setState({right_table: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  }
 
  currentCourses = 
    axios
        .get("courses_firstSemester", {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
        .then((res) => {
          this.setState({left_table: res.data})
          
        })
        .catch((err) => {
          console.log(err);
        }); 

  followingCourses = 
    axios
        .get("courses_secondSemester", {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
        .then((res) => {
          this.setState({right_table: res.data})
          
        })
        .catch((err) => {
          console.log(err);
        }); 
      


  render() {
    var decoded = jwt_decode(localStorage.getItem("token"));
    return (
      <div className="Home-container" >
        <div className="topbar" >
          <p>
            {" "}
            Welcome  {decoded.stu_fname}, this is your new enrollment system.
           <a href ="/" onClick={this.logout}>Log Out</a>
          </p>
        </div>
        <div className="Home-header" >
          <div className="menu">
            <h2 style = {{textAlign: 'left', color: 'gray', fontFamily: 'Helvetica', paddingLeft: 10}}> 
            Menu </h2>
            <Menu options = {this.menu}/>
          </div>
          <div className="current-semester" > 
            <h2 style = {{textAlign: 'left', color: 'gray', fontFamily: 'Helvetica', paddingLeft: 10}}> 
            Current Semester </h2>
            <div className='scroller'>
              <Table  items={this.state.left_table}/>
            </div>
          </div>
          <div className="next-semester"> 
          <h2 style = {{textAlign: 'left', color: 'gray', fontFamily: 'Helvetica', paddingLeft: 10}}> 
            Following Semester </h2>
            <SearchBar searchCourse = {this.filtering}/>
            <div className='scroller'>
              <Table items={this.state.right_table}/>
            </div>
            <p style={{textAlign:'right', fontFamily: 'Helvetica', fontSize:11, color: 'gray', paddingRight: 5}}>
              {this.state.right_table.length} result(s) found.
            </p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default home;
