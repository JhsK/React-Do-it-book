import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles, { css } from "./wihtStyles";

class Test extends PureComponent {
  render() {
    const {
      children,
      styles,
      large,
      xlarge,
      small,
      xsamll,
      primary,
      secondary,
    } = this.props;
    return (
      <span
        {...css(
          styles.default,
          xsamll && styles.xsamll,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary
        )}
      >
        {children}
      </span>
    );
  }
}

Test.PropTypes = {
  children: PropTypes.node.isRequired,
  xsamll: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  xsamll: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Test);
