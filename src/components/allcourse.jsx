import React from "react";
import Collapsible from "react-collapsible";
import courses from "../components/data/allcourses.json";
import "../styles/allcourse.css";

const Data = courses.map((data,key) => {
  return (
    <Collapsible
      key={key}
      trigger={data.title}
      className="collapse-main"
      transitionTime="100" 
    >
      {data.cards.map((card,key) => {
        return (
          <div  key={key} className="col-lg-4 featured-card" style={{ width: "100%" }}>
            <div className="card-icon-title">
              <div className="card-icon">
                <i className={card.icon}></i>
              </div>
              <div className="card-title">
                <b>{card.name}</b>
              </div>
            </div>
            <div className="card-price-button">
              <div className="card-price">Price: Free</div>
              <a className="card-button" href={card.link}>
                Go to Course
              </a>
            </div>
          </div>
        );
      })}
    </Collapsible>
  );
});

export default function allcourse() {
  return (
    <div className="allcourse">
      <div className="featured-title">All Courses</div>
      <div className="maxwidthcards">
        {Data}
        <br />
      </div>
      <button onClick={goToTop} className="back-to-top"><span class="material-symbols-outlined">
        arrow_circle_up
          </span><br />Back To Top
      </button>
    </div>
  );
}
