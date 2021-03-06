import React, { Component } from 'react'
import "./SectionsTable.css";

export class SectionsTable extends Component {

  renderTableData() {
    return this.props.sections.map(section => {
       return (
        <tr key={section.SECTION_ID}>
          <td>{section.course + "-" + section.section}</td>
          <td>{section.capacity}</td>
          <td>{section.spaces}</td>
          <td>{section.time + ", " + section.days + ", " + section.room}</td>
          <td>{section.professor}</td>
          <td>{section.extra_info}</td>
          <td>
            <input type="checkbox" value={[section.SECTION_ID, section.course]} onChange={this.props.handleSelect("selected")}/>
          </td>
        </tr>
       )
    })
  }

  renderTableHeader() {
    let header = ["Section", "Capacity", "Remaining", "Time and Place", "Professor", "Aditional Information", "Select"]

    if (this.props.sections.length === 0) { // show message in header if there are no sections for this course
      header = ["There are no sections for this course."]
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

export default SectionsTable

