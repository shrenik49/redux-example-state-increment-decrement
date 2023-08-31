import React from 'react';
import { connect } from 'react-redux';
import './style.css';
class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'INCREMENT',
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'DECREMENT',
    });
  };

  render() {
    return (
      <div className="App mt-5">
        <button onClick={this.increment} className="incrementbuttonclass">
          Increment
        </button>
        <button onClick={this.decrement} className="decrementbuttonclass">
          Decrement
        </button>
        <h2 className="stateClass">{this.props.count}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
