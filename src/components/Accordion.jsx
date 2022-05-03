import React, { useState } from "react";
const Accordion = ({ items }) => {
  const [title, setTitle] = useState(false);
  const handleClick = (indexus) => {
    setTitle(indexus);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${title === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${title === index ? "active" : ""}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};
export default Accordion;
