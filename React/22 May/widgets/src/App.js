import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const initialItems = [
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
];

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleListChange = (newList) => {
    setItems(newList);
  };

  return (
    <div>
      <br />
      {/* <Accordion items={items} handleListChange={handleListChange} /> */}
      <Search />
    </div>
  );
};
export default App;
