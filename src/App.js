import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    lengthOfText: 0,
    text: ""
  };

  removeCharHandler = charIndex => {
    const textArray = [...this.state.text];
    textArray.splice(charIndex, 1);
    this.setState({ text: textArray.join("") });
  };

  inputChangeHandler = event => {
    const newLength = event.target.value.length;
    const newValue = event.target.value;
    //console.log(newLength);
    this.setState({ lengthOfText: newLength, text: newValue });
  };

  render() {
    let listOfCharComponents = null;

    if (this.state.text) {
      const textArray = this.state.text.split("");
      listOfCharComponents = (
        <div>
          {textArray.map((char, index) => {
            return (
              <CharComponent
                key={index}
                content={char}
                removeChar={() => this.removeCharHandler(index)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <input
          value={this.state.text}
          type="text"
          onChange={event => this.inputChangeHandler(event)}
        />
        <p>{this.state.lengthOfText}</p>
        <ValidationComponent paragraphLength={this.state.lengthOfText} />
        {listOfCharComponents}
      </div>
    );
  }
}

export default App;
