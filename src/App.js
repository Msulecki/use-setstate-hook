import React, { useState } from 'react';
import { useSetState } from './hooks/useSetState';
import './App.scss';

function App() {

  const initialState = {
    id: 0,
    firstName: "John",
    secondName: "Doe"
  }

  const [input, setInput] = useState("");
  const [state, setState] = useSetState(initialState);
  const [error, setError] = useState("");

  const keys = Object.keys(state);
  const object = <ul>{keys.map(key => <li key={key}>{`${key}: ${state[key]}`}</li>)}</ul>

  const handleCallback = (val) => {
    console.log('handleCallback value:', val);
    return val;
  }

  const handleUpdate = () => {
    try {
      const parsedInput = JSON.parse(input);
      setState(parsedInput, () => handleCallback("some value"));
      setInput("");
      error && setError("");
    }
    catch (error) {
      console.error(error);
      setError(error.name);
    }
  }

  return (
    <div className="app">
      <div className="app_box">
        <div className="app__hook">
          <h1>Hook value:</h1>
          <div className="app__hook-val">{object}</div>
          <span><strong>Input example: </strong>{JSON.stringify(initialState)}</span>
        </div>
        <input onChange={e => setInput(e.target.value)} type="text" placeholder="enter new value (stringified JSON)" value={input} />
        <button onClick={handleUpdate}>Update</button>
        {error && <div className="app__error">{error}</div>}
      </div>
    </div>
  );
}
export default App;