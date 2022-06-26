import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { ComponentFirst } from "./Component_first";
import { Navbar } from "./Navbar";

function App() {
  var name = "Dom";
  const [input, setinput] = useState("");

  const handelChange = (event) => {
    setinput(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ComponentFirst name={name} />
        <input onChange={handelChange} type="text" />
        <Form
          onSubmit={(input2) => {
            console.log(input2);
          }}
          valueee={input}
        />
      </header>
    </div>
  );
}

export default App;
