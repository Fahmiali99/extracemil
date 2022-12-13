import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/main";
import background from "./assets/background/background.png";

function App() {
  return (
    <div className="App bg-cover bg-white  bg-[url('/src/assets/background/background.png')]">
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
