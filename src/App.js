import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEvents from "./Social-Workers/Pages/Admin_Panel/AddEvents/AddEvents";
import RegisterList from "./Social-Workers/Pages/Admin_Panel/RegisterList/RegisterList";
import Blogs from "./Social-Workers/Pages/Blogs/Blogs";
import Events from "./Social-Workers/Pages/Events/Events";
import Home from "./Social-Workers/Pages/Home/Home";
import AdminLogin from "./Social-Workers/Pages/LoginMethod/AdminLogin/AdminLogin";
import Login from "./Social-Workers/Pages/LoginMethod/Login/Login";
import SignUp from "./Social-Workers/Pages/LoginMethod/SignUp/SignUp";
import NotFound from "./Social-Workers/Pages/NotFound/NotFound";
import ParticipatedEvents from "./Social-Workers/Pages/ParticipatedEvents/ParticipatedEvents";
import NavBaar from "./Social-Workers/Pages/Shared/NavBaar/NavBaar";
import WorkRegister from "./Social-Workers/Pages/WorkRegister/WorkRegister";
import AuthContext from "./Social-Workers/Context/AuthContext";
import PrivateRoute from "./Social-Workers/PrivateRoute/PrivateRoute";
import AdminMain from "./Social-Workers/Pages/Admin_Panel/AdminMain/AdminMain";
import AdminPrivateRoute from "./Social-Workers/PrivateRoute/AdminPrivateRoute";

function App() {
  return (
    <AuthContext>
      <Router>
        <NavBaar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/events">
            <Events />
          </PrivateRoute>

          <Route path="/blogs">
            <Blogs />
          </Route>

          <AdminPrivateRoute path="/addEvents">
            <AddEvents />
          </AdminPrivateRoute>

          <AdminPrivateRoute path="/participated">
            <ParticipatedEvents />
          </AdminPrivateRoute>

          <AdminPrivateRoute path="/registerList">
            <RegisterList />
          </AdminPrivateRoute>

          <AdminPrivateRoute path="/adminPanel">
            <AdminMain />
          </AdminPrivateRoute>

          <Route path="/adminLogin">
            <AdminLogin />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/workRegister">
            <WorkRegister />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
