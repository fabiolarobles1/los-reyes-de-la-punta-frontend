import React, { Component } from "react";
import history from "../../Routing/history";
import "./Home.css";
import "../Login/Login.css";
import jwt_decode from "jwt-decode";
import Table from "../Table"
import SearchBar from "../SearchBar"
import request from "../../request.json"
import student from "../../student.json"
import semester from "../../semester.json"
import Menu from "../Menu"
class home extends Component {

  logout = () => {
    localStorage.clear();
    history.push("/");
  }


  state = {
    //gets the courses that are supposed to take next semester
    search: request.filter(course => { return course.year === (semester.semester===1 ? semester.year_end - student.stu_year : semester.year_end - student.stu_year + 1) && 
      (semester.semester === 1 ? course.semester === 2 : course.semester === 1)}),
  }

  menu = [{title: 'Enrollment for next semester', route:'/', icon: 'enrollment.png'}, {title:'Dropdown a course', route:'/', icon:'dropdown.png'}]

  //looks for the courses that match the search
  filtering = (id) => {
   this.setState({search: request.filter(course => {
        return (course.id.toLowerCase().replaceAll("", "").indexOf(id.toLowerCase().replaceAll(" ", ""))!== -1 || 
        course.name.toLowerCase().replaceAll(" ", "").indexOf(id.toLowerCase().replaceAll(" ", ""))!== -1) 
    })})
  }
  
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
        <div className="Home-header">
          <div className="menu">
            <h2 style = {{textAlign: 'left', color: 'gray', fontFamily: 'Helvetica', paddingLeft: 10}}> 
            Menu </h2>
            <Menu options = {this.menu}/>
          </div>
          <div className="current-semester"> 
            <h2 style = {{textAlign: 'left', color: 'gray', fontFamily: 'Helvetica', paddingLeft: 10}}> 
            Current Semester </h2>
            <div className='scroller'>
              <Table items={request.filter(course => {
              return (course.year === (semester.year_end - student.stu_year )) && 
              (course.semester === semester.semester)})}/>
            </div>
          </div>
          <div className="next-semester"> 
          <h2 style = {{textAlign: 'left', color: 'gray', fontFamily: 'Helvetica', paddingLeft: 10}}> 
            Following Semester </h2>
            <SearchBar searchCourse = {this.filtering}/>
            <div className='scroller'>
              <Table items={this.state.search}/>
            </div>
            <p style={{textAlign:'right', fontFamily: 'Helvetica', fontSize:11, color: 'gray', paddingRight: 5}}>
              {this.state.search.length} result(s) found.
            </p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default home;
