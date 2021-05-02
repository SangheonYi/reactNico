import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreaTors } from "../store";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreaTors.deleteToDo(ownProps.id)),
  };
}
export default connect(null, mapDispatchProps)(ToDo);
