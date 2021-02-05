import React from "react";
import PropTypes from "prop-types";
import Button from "../04/Button";
import withLoadingContext from "./withLoadingContext";

function ButtonWithLoadingContext({ label, loading, setLoading }) {
  //   const { loading, setLoading } = context;

  return (
    <Button onPress={() => setLoading(!loading)}>
      {loading ? "로딩중" : label}
    </Button>
  );
}

ButtonWithLoadingContext.contextTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default withLoadingContext(ButtonWithLoadingContext);
