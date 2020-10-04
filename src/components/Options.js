import React, { Component } from 'react'
import PropTypes from "prop-types"
import './Options.css'
import history from '../Routing/history'
import enrollmentIcon from '../assets/enrollment.png'
import dropdownIcon from '../assets/dropdown.png'

class Options extends Component {

    
    render() {
        return (
            <div className='options' href ={this.props.option.route} onClick={() => history.push(this.props.option.route)}
            style= {{backgroundImage: `url(${this.props.option.icon === 'enrollment.png' ? enrollmentIcon : dropdownIcon})`}}>
                 <h2>{this.props.option.title}</h2>
            </div>
        )
    }
}

Options.propTypes = {
    option: PropTypes.object.isRequired
}

export default Options
