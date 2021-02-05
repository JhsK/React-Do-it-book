import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ButtonWithContext from "./ButtonWithContext";
import Button from "../04/Button";

class HomePageComponent extends PureComponent {
  render() {
    return (
      <div>
        <TableComponent />
        <Button onPress={this.toggleLoading}>상태 변경</Button>
      </div>
    );
  }
}

HomePageComponent.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default HomePageComponent;
