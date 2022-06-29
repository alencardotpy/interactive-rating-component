import { Component } from "react";
import "./App.css";
import starSvg from "./icon-star.svg";
import thankYouSvg from "./illustration-thank-you.svg";

const rates = [1, 2, 3, 4, 5];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: 0,
      rate: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  handleSubmit() {
    console.log("handle submit");
    this.setState((state) => {
      return state.card === 0 ? { card: 1 } : { card: 0 };
    });
  }

  clickHandle(e) {
    for (let i = 1; i <= rates.length; i++) {
      if (e.target.value === i) {
        document
          .getElementById("item" + i)
          .classList.add("card-survey__listItem--selected");
        document
          .getElementById("item" + i)
          .classList.remove("card-survey__listItem--unselected");
        this.setState(() => {
          return {
            rate: i,
          };
        });
      } else {
        document
          .getElementById("item" + i)
          .classList.add("card-survey__listItem--unselected");
        document
          .getElementById("item" + i)
          .classList.remove("card-survey__listItem--selected");
      }
    }
  }
  render() {
    return (
      <div className="App card">
        {this.state.card === 0 ? (
          <SurveyCard
            clickHandle={this.clickHandle}
            btnAction={this.handleSubmit}
          />
        ) : (
          <SurveyResponse data={this.state.rate} />
        )}
      </div>
    );
  }
}

const SurveyCard = (props) => {
  return (
    <div className="card-survey">
      <img
        className="card-survey__image"
        src={starSvg}
        alt=""
        width="15"
        height="15"
      />
      <h1 className="card-survey__title">How did we do?</h1>
      <p className="card-survey__message">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="card-survey__list">
        {rates.map((item, key) => {
          return (
            <li
              className="card-survey__listItem card-survey__listItem--unselected"
              id={"item" + item}
              key={key}
              onClick={props.clickHandle}
              value={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <button
        type="submit"
        className="card-survey__btn card-survey__btn--hover"
        onClick={props.btnAction}
      >
        SUBMIT
      </button>
    </div>
  );
};

const SurveyResponse = (props) => {
  return (
    <div className="card-response">
      <img
        src={thankYouSvg}
        alt=""
        width="150"
        height="100"
        className="card-response__image"
      />
      <p className="card-response__state-choice">
        You selected <strong>{props.data}</strong> out of <strong>5</strong>
      </p>
      <h1 className="card-response__title">Thank You</h1>
      <p className="card-response__message">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default App;
