import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreaTors } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  console.log(addToDo);
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateProps(state) {
  return { toDos: state };
}

function mapDispatchProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreaTors.addToDo(text)),
  };
}

export default connect(mapStateProps, mapDispatchProps)(Home);
