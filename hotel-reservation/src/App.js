import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import ErrorPage from "./pages/errorpage.component";
import RoomsPage from "./pages/roomspage.component";
import SingleRoomPage from "./pages/singleroompage.component";
import NavBar from "./components/navbar.component";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms" component={RoomsPage} />
        <Route exact path="/rooms/:roomId" component={SingleRoomPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
