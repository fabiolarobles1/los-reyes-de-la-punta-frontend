import React, { Component } from 'react'
import "./SectionsTable.css";

export class SectionsTable extends Component {

  renderTableData() {
    return this.props.sections.map(section => {
       return (
        <tr key={section.SECTION_ID}>
          <td>{section.course + "-" + section.section}</td>
          <td>{section.capacity}</td>
          <td>-1</td>
          <td>{section.time + ", " + section.days + ", " + section.room}</td>
          <td>{section.professor}</td>
          <td>{section.extra_info}</td>
          <td>
            <input type="checkbox" value={section.SECTION_ID} onChange={this.props.handleSelect("selected")}/>
          </td>
        </tr>
       )
    })
  }

  renderTableHeader() {
    let header = ["Section", "Capacity", "Remaining", "Time and Place", "Professor", "Aditional Information", "Select"]
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

