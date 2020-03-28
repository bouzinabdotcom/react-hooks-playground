import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="container text-center pt-5">
        <button onClick={this.countUp} className="btn btn-primary">Count up</button>
        <h1 className="mt-3">
          {this.state.counter}
        </h1>
      </div>
    );
  }
}
