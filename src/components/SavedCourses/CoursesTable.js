import React, { Component } from 'react'
import "./CoursesTable.css";

export class SectionsTable extends Component {

  renderTableData() {
    return this.props.sections.map(section => {
       return (
        <tr key={section.section}>
          <td>{section.course + "-" + section.section}</td>
          <td>{section.credits}</td>
          <td>{section.capacity}</td>
          <td>{section.spaces}</td>
          <td>{section.time + ", " + section.days + ", " + section.room}</td>
          <td>{section.professor}</td>
          <td>{section.extra_info}</td>
          <td>
            <input type="checkbox"  value={section.SECTION_ID} onChange={this.props.handleSelect("selected")}/>
          </td>
        </tr>
       )
    })
  }

  renderTableHeader() {
    let header = ["Section", "Credits", "Capacity", "Remaining", "Time and Place", "Professor", "Aditional Information", "Select"]

    // show messages in header if there are no sections
    if (this.props.sections.length === 0 && this.props.withdraw) { 
      header = ["You have not enrolled any courses for the next semester."]
    } else if (this.props.sections.length === 0 && !this.props.withdraw) {
      header = ["You have not saved any courses."]
    }

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

export default SectionsTable;

