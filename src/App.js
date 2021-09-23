import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact >
            <Homepage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route pathe="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
