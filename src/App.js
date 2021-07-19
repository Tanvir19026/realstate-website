
import './App.css';
import Home from './components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  
  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
   <Home></Home>
   </Switch>
   </Router>
  );
}

export default App;
