import "./App.css";
import Item from "./components/conditional";

// Main Components for react project
function App() {
  return (
    <>
      <ul>
        <Item name="Apple" isPacked= {true} />
        <Item name="Oppo" isPacked= {false} />
        <Item name="vivo" isPacked= {true} />
      </ul>
    </>
  );
}

export default App;
