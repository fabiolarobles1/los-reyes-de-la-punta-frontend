import React, { Component } from 'react'
import Options from "./Options"
import PropTypes from "prop-types"
import './Home/Home.css'

class Menu extends Component {
    render() {
        return this.props.options.map((option) => (
            <Options key={option.title} option = {option}/>
        ))
    }
}

Menu.propTypes = {
    options: PropTypes.array.isRequired
}
export default Menu
