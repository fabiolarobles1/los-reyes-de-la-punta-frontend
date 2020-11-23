import React, { Component } from 'react'
import "./CoursesTable.css";

export class SectionsTable extends Component {

  renderTableData() {
    return this.props.sections.map(section => {
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
            <input type="checkbox"  value={section.SECTION_ID} onChange={this.props.handleSelect("selected")}/>
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

export default SectionsTable;

