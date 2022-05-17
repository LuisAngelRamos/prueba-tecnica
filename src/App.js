import { Component1Page } from "./pages/Component1Page";
import { Component2Page } from "./pages/Component2Page";
import { useContext } from "react";
import Context from "./Context";
import "./App.css";

function App() {
  const { elementos } = useContext(Context.Context);

  return (
    <div className="buttons">
      <div>
        <Component1Page />
        <Component2Page />
      </div>
      <pre>{JSON.stringify(elementos, null, 2)}</pre>
    </div>
  );
}

export default App;
