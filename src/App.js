import "./App.css";
import { movies } from "./data";
import CustomCard from "./components/Card";
import { useState } from "react";

function App() {
  const [list, setList] = useState(movies);
  const handleDelete = (id) => {
    const newTable = list.filter((elt) => elt.id !== id);
    setList(newTable);
  };

  return (
    <div className="d-flex justify-content-around flex-wrap m-1">
      {list.length !== 0
        ? list.map((elt) => (
            <CustomCard
              poster={elt.poster}
              title={elt.title}
              description={elt.decription}
              handleDelete={handleDelete}
              id={elt.id}
            />
          ))
        : "loading"}
    </div>
  );
}

export default App;
