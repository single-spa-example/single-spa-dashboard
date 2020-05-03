import React from "react";
import "../styles.css";
import {
  BrowserRouter as Router,
  useHistory,
  Redirect,
} from "react-router-dom";
import { getAuthenticatedUser } from "@hcsc/single-spa-styles";

export const Root = (props) => {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
};

const Dashboard = () => {
  const history = useHistory();
  if (getAuthenticatedUser() === null) {
    return <Redirect to="/login" />;
  }
  return (
    <section>
      <h1>Dashboard</h1>
    </section>
  );
};
