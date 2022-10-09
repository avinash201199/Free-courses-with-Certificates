import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import courses from "../components/data/allcourses.json";

export default function allcourse(props) {
  const [data, setData] = useState(courses.data);

  useEffect(() => {
    if (props.query) {
      const re = new RegExp(props.query, "i");
      setData(
        data
          .map((d) => ({
            title: d.title,
            cards: d.cards.filter((c) => re.test(c.name)),
          }))
          .filter((d) => d.cards.length > 0)
      );
    } else {
      setData(courses.data);
    }
  }, [props.query]);

  return (
    <div className="allcourse">
      <div className="featured-title">
        {!props.query ? "All Courses" : `Search results for '${props.query}'`}
      </div>
      <div className="maxwidthcards">
        {data.map((data, dataIndex) => {
          return (
            <Collapsible
              trigger={data.title}
              className="collapse-main"
              transitionTime="100"
              key={dataIndex}
            >
              {data.cards.map((card, cardIndex) => {
                return (
                  <div
                    className="col-lg-4 featured-card"
                    style={{ width: "100%" }}
                    key={dataIndex + "" + cardIndex}
                  >
                    <div className="card-icon-title">
                      <div className="card-icon">
                        <i className={card.icon}></i>
                      </div>
                      <div className="card-title">
                        <b>{card.name}</b>
                      </div>
                    </div>
                    <div className="card-desc">Source: {card.source}</div>
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
        })}
        <br />
      </div>
    </div>
  );
}
