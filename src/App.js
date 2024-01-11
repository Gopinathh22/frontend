import logo from "./logo.svg";
import "./App.css";
import Home from "./routes/home.js";
import Navbar from "./routes/navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
