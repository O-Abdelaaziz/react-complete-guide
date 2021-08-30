import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modalIsOpen: false,
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  }
  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModalHandler} /> : null}
        {this.state.modalIsOpen ? <Backdrop /> : null}
        <button className="Button" onClick={this.openModalHandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
