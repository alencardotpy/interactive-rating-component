import { render } from "@testing-library/react";
import { React, Component } from "react";
import SurveyCard from "../SurveyCard/SurveyCard";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App card">
        <SurveyCard children={<Button />} />
      </div>
    );
  }
}

const Button = () => {
  return (
    <button type="submit" className="card__btn card__btn--hover">
      SUMIT
    </button>
  );
};

export default App;
