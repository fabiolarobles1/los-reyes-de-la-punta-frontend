import React, { Component } from 'react'
import PropTypes from "prop-types"
import student from "../student.json"
import semester from "../semester.json"
import './TableStyling.css'
import history from '../Routing/history'

class TableItem extends Component {

    // getStyle = () => {
    //     return {
    //         background: '#f4f4f4',
    //         paddingLeft: '20px',
    //         fontSize: '12px',
    //         width: '500px',
    //         fontWeight: 600,
    //         border: '.5px #ccc dotted',
    //         color: 'gray',
    //         fontFamily: 'Helvetica',
    //         textAlign: 'left',
    //         cursor: 'default',
    //         boxSizing: 'border-box'
    //     }
    // }
    
    render() {
        return (
            <div className = 'table' /*style = {this.getStyle()}*/ href ={this.props.item.route} onClick={() => history.push(this.props.item.route)} >
                <h2 style = {{color:'#0f8f46'}} >{this.props.item.name}</h2>  
                <p>{this.props.item.id}</p>
            <p> {this.props.item.semester === semester.semester && (semester.year_end - student.stu_year) === this.props.item.year ? 
                this.props.item.professor + ' | Section: ' + this.props.item.section : 'Year: '+ this.props.item.year +
                ' | Semester: ' + this.props.item.semester + ' | Creds: ' + this.props.item.credits}</p>
            </div>
        )
    }
}

TableItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default TableItem
