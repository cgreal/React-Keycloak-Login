import React from "react";
import { Navigate } from "react-router-dom";
import KeycloakService from "./KeycloakService";

export default function PrivateRoute({ children }) {
  if (!KeycloakService.keycloak?.authenticated) {
    return <Navigate to="/" />;
  }
  return children;
}
