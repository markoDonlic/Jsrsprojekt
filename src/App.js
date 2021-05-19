import './App.css';
import React from "react";
import{BrowserRouter as Router,Route} from 'react-router-dom';
import Naslovna from "./components/Naslovna";
import Povijest from "./components/Povijest";
import Opcenito from "./components/Opcenito";
import Turizam from "./components/Turizam";



function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Naslovna} />
        <Route path ="/Povijest" component={Povijest} />
        <Route path ="/Opcenito" component={Opcenito} />
        <Route path ="/Turizam" component={Turizam} />
        

      </Router>

    </div>
  );
}

export default App;