import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color red",
    value: "red",
  },
  {
    label: "The Color green",
    value: "green",
  },
  {
    label: "The Color blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Search />
      <br></br>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <br></br>
      <Accordion items={items} />
    </div>
  );
};
export default App;
