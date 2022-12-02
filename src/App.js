import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/main";
import Navbar from "./components/navigation/";
import Footer from "./components/footer/";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
