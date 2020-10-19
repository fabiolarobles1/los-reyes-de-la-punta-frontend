import React, { Component } from 'react'
import TableItem from "./TableItem"
import PropTypes from "prop-types"

class Table extends Component {
    render() {
        return this.props.items.map((item) => (
            <TableItem key={item.id} item = {item}/>
        ))
    }
}

Table.propTypes = {
    items: PropTypes.array.isRequired
}
export default Table
