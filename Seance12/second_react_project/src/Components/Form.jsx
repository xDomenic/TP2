import { useState } from "react";

export const Form = ({ onSubmit, valueee }) => {
  const [input2, setinput2] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input2);
      }}
    >
      <input
        onChange={(e) => setinput2(e.target.value)}
        type="text"
        value={input2}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};
