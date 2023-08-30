import Increment from "./components/Increment/Increment";
import Decrement from "./components/Decrement/decrement";
import { useState } from "react";
import './app.css'

function App() {
  const [num, setNum] = useState(0);
  function Inc() {
    setNum(num + 1);
  }
  function Dec() {
    setNum(num - 1);
  }

  return (
    
      <div className="container">
        <div className="number"><h1>{num}</h1></div>
        <div className="but">
          <Increment handle={Inc} />
          <Decrement handle={Dec} />
        </div>
      </div>
    
  );
}

export default App;
