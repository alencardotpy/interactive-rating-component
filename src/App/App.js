import { Component } from "react";
import SurveyCard from "../SurveyCard/SurveyCard";
import SurveyResponse from "../SurveyResponse/SurveyResponse";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App card">
        <SurveyResponse children={<Button />} />
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
