import React, { useState } from "react";

// Implementation of useState Hook
const itemsFromAccordion = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    id: 2,
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    id: 3,
    title: "How do you use React?",
    content: "You use React by creating components",
  },
  {
    id: 4,
    title: "Why can't we use Angular?",
    content: "You can use both Angular or React depending on your use case",
  },
  {
    id: 5,
    title: "5th Title",
    content: "New Title",
  },
];

const Accordion = ({ items, handleListChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {

    const active = index === activeIndex ? "active" : "";
    const arrow = index === activeIndex ? "up" : "down";

    return (
      <React.Fragment key={item.id}>
        {/* Basically key helps in optimizing the overall performance of the application */}{" "}
        {/* Here key is used to uniquely identify each list item */}
        {/* Interview Question - What are keyed Fragments? */}
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className={`angle ${arrow} icon`}></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="ui styled accordion">{renderedItems}</div>
      <br />
      <span>
        <button onClick={() => handleListChange(itemsFromAccordion)}>
          Change List
        </button>
      </span>
    </>
  );
};

export default Accordion;
