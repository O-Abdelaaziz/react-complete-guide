import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/Transition";
class App extends Component {
  Trans
  state = {
    modalIsOpen: false,
    showBlock: false
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
        <button className="Button" onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>Toggle</button>
        <br /><br />
        {/* {this.state.showBlock ? */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {state =>
            <div style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exiting' ? 0 : 1
            }}></div>

          }

        </Transition>
        {/* : null} */}
        <br /><br />
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen}
          timeout={300}
        >
          {state => (
            <Modal show={state} closed={this.closeModalHandler} />
          )}
        </Transition>
        {this.state.modalIsOpen ? <Backdrop /> : null}
        <button className="Button" onClick={this.openModalHandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
