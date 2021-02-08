import { connect } from "react-redux";
import ActionComponent from "../ActionComponent";

import { setAge } from "../actions/collectionActions01";

const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)),
  };
};

export default connect(null, mapDispatchToProps)(ActionComponent);
