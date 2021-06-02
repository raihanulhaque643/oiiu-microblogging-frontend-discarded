import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import AllBlogsPage from "./containers/AllBlogsPage";
import HomePage from "./containers/HomePage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  if (!token) {
    return <HomePage setToken={setToken} setUser={setUser} />;
  }

  localStorage.setItem("token", token);
  localStorage.setItem("user", user);

  return (
    <div className="">
      <Router>
        <Switch>
          <ProtectedRoute
            exact
            path="/allblogs"
            component={AllBlogsPage}
            token={token}
            user={user}
            setToken={setToken}
            setUser={setUser}
          />
          <Route path="">
            <Redirect to="/allblogs" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
