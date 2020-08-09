import React from "react";
import apiData from "./../../service/api/api";
import PersonInfo from "./../person/info";

function App() {
  const [data, setData] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  //  TODO fetch contacts using apiData function, handle loading and error states

  return (
    <div className="app">
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {data.map((personInfo) => (
          // @ts-ignore
          <PersonInfo key={personInfo.id} data={personInfo} />
        ))}
      </div>
    </div>
  );
}

export default App;
