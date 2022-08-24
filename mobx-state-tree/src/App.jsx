import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // there are specific controls provided by mobxs state tree in react so there has to be a prevelant source of information

  return (
    // * action id used to update the performant isue provided by the state
    // ! mob x implementation
    // ? main 6 features are - tree, node, leaf, view, snapshot, action
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more there are so many things
        in this world on which we dont have any control like earthquakes
        tsunamies, reality shows and what not but the thing is that on what we
        can like to forgive someone or to spread hapiness without expecting any
        in retur n b
      </p>
    </div>
  );
}

export default App;
