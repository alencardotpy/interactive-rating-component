import "./SurveyCard.css";
import starImage from "./icon-star.svg";

const rates = [1, 2, 3, 4, 5];

function clickHandle(e) {
  console.log(e.target.valu);
  for (let i = 1; i <= rates.length; i++) {
    if (e.target.value === i) {
      document
        .getElementById("item" + i)
        .classList.add("card-survey__listItem--selected");
      document
        .getElementById("item" + i)
        .classList.remove("card-survey__listItem--unselected");
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

function SurveyCard(props, children) {
  return (
    <div className="card-survey">
      <img
        className="card-survey__image"
        src={starImage}
        alt=""
        width="15"
        height="15"
      />
      <h1 className="card-survey__title">How did we do?</h1>
      <p className="card-survey__text">
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
              onClick={clickHandle}
              value={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {props.children}
    </div>
  );
}

export default SurveyCard;
