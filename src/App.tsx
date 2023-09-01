import React from "react";
import { Toaster } from "react-hot-toast";
import Tree from "./components/Tree/Tree";

function App() {
  return (
    <div className="App">
      <Tree />
      <Toaster />
    </div>
  );
}

export default App;
