import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <button onClick={this.props.onClick} style={{ background: "#911" }}>
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    // this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Enviar</Button>
      </>
    );
  }
}

render(<App />, document.getElementById("app"));
