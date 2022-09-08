import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Addmovie from "./Addmovie";
import Moviedetails from "./Moviedetails";
import Searchpage from "./Searchpage";
import Notfoundpage from "./Notfoundpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/add">
            <Addmovie/>
          </Route>
          <Route path="/moviedetails:id">
            <Moviedetails/>
          </Route>

          <Route path="/search:searchVal">
            <Searchpage/>
          </Route>

          <Route path="*">
            <Notfoundpage />
          </Route>

         
          
        </Switch>


      </div>

    </Router>
  
  );
}

export default App;
