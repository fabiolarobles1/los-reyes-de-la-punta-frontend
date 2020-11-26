import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TableStyling.css";
import history from "../Routing/history";
import { faDumpster } from "@fortawesome/free-solid-svg-icons";
import Pop from "./PopUp";

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }
  showModal = () => {
    this.setState({ modal: true });
  };

  hideModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <div
          className="table"
          href={this.props.item.route}
          onClick={this.showModal}
        >
          <h2 style={{ color: "#0f8f46" }}>{this.props.item.regular_name}</h2>
          <p> {this.props.item.name} </p>
          <p>
            {"Year: " +
              this.props.item.year +
              " | Semester: " +
              this.props.item.semestre +
              " | Creds: " +
              this.props.item.credits}
          </p>
        </div>
        <Pop
          modal={this.state.modal}
          handleClose={this.hideModal}
          item={this.props.item}
        />
      </div>
    );
  }
}

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TableItem;
