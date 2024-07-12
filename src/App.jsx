import data from "./data";
import "./App.css";
import { useState } from "react";
import Menu from "./Menu";

const App = () => {
  const [menu, setMenu] = useState(data);
  const filterItems = (category) => {
    setMenu(menu.filter((item) => item.category === category));
  };
  return (
    <>
      <div className="container">
        <h1>our Menu</h1>
        <div className="filters">
          <ul>
            <li onClick={() => setMenu(data)}>All</li>
            <li onClick={() => filterItems("breakfast")}>Breakfast</li>
            <li onClick={() => filterItems("lunch")}>Lunch</li>
            <li onClick={() => filterItems("shakes")}>Shakes</li>
          </ul>
        </div>
        <Menu menu={menu}></Menu>
      </div>
    </>
  );
};

export default App;
