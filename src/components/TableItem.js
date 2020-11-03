import React, { Component } from 'react'
import PropTypes from "prop-types"
import './TableStyling.css'
import history from '../Routing/history'

class TableItem extends Component {

    
    render() {
        return (
            <div className = 'table' href ={this.props.item.route} onClick={() => history.push(this.props.item.route)} >
                <h2 style = {{color:'#0f8f46'}} >{this.props.item.name}</h2>  
                {/* <p>{this.props.item.id}</p> */}
            <p> {/*this.props.item.semester === semester.semester && (semester.year_end - student.stu_year) === this.props.item.year ? 
                this.props.item.professor + ' | Section: ' + this.props.item.section :*/ 'Year: '+ this.props.item.year +
                ' | Semester: ' + this.props.item.semestre + ' | Creds: ' + this.props.item.credits}</p>
            </div>
        )
    }
}

TableItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default TableItem
