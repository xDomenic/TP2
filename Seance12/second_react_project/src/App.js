import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { ComponentFirst } from "./Component_first";
import { Navbar } from "./Navbar";

function App()
{
  var name = "Dom";
  const [input, setinput] = useState("");

  const handelChange = (event) =>
  {
    setinput(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header bg-[blue] p-[30px] m-auto m-0 hidden flex !justify-center duration-700 dom sm:bg-[red] md:bg-[green] xl:bg-[]  ">
        <Navbar />
        <ComponentFirst name={name} />
        <input onChange={handelChange} type="text" />
        <Form
          onSubmit={(input2) =>
          {
            console.log(input2);
          }}
          valueee={input}
        />
      </header>
    </div>
  );
}

export default App;
