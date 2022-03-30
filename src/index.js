import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';

class Square extends React.Component {
  render(){
    return(
      <button className = "square">
        {this.props.value}
      </button>
    );
  }
}


reportWebVitals();