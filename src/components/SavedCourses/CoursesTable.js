import React, { Component } from 'react'
import "./CoursesTable.css";

export class SectionsTable extends Component {

  // create dummy data since we this part of the back end is not implemented yet
  constructor(props) {
    super(props) 
    this.state = { 
       sections: [
          {section: "CIIC4070-011", 
          credits: 3, 
          capacity: 90,
          remaining: 80, 
          timePlace: "2:30pm - 3:20pm,   LWV,   S-113", 
          professor: "Alan Turing", 
          info: "Slit Section"},
          {section: "CIIC4070-012", 
          credits: 3, 
          capacity: 90,
          remaining: 30, 
          timePlace: "3:30pm - 4:20pm,   LWV,   S-113", 
          professor: "Alan Turing", 
          info: "Slit Section"},
          {section: "CIIC4070-013", 
          credits: 3, 
          capacity: 90, 
          remaining: 50,
          timePlace: "4:30pm - 5:20pm,   LWV,   S-113", 
          professor: "Alan Turing", 
          info: "Slit Section"},
          {section: "CIIC4010-060H", 
          credits: 3, 
          capacity: 70, 
          remaining: 36,
          timePlace: "5:00pm - 6:15pm,   MJ,   S-113", 
          professor: "Welcome Seeing", 
          info: "Hybrid"},
          {section: "CIIC4010-010L", 
          credits: 3, 
          capacity: 20, 
          remaining: 13,
          timePlace: "11:30am - 1:20pm,   W,   S-121", 
          professor: "Welcome Seeing", 
          info: "Laboratory"}
       ]
    }
  }

  renderTableData() {
    return this.state.sections.map(section => {
       return (
        <tr key={section.section}>
          <td>{section.section}</td>
          <td>{section.credits}</td>
          <td>{section.capacity}</td>
          <td>{section.remaining}</td>
          <td>{section.timePlace}</td>
          <td>{section.professor}</td>
          <td>{section.info}</td>
          <td>
            <input type="checkbox" value="section.section"/>
          </td>
        </tr>
       )
    })
  }

  renderTableHeader() {
    let header = ["Section", "Credits", "Capacity", "Remaining", "Time and Place", "Professor", "Aditional Information", "Select"]
    return header.map((name, index) => {
       return <th key={index}>{name}</th>
    })
  }

  render() {
    return (
      <div>
        <table type="sections">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SectionsTable

