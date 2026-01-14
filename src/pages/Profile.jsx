import React from "react";
import KeycloakService from "../auth/KeycloakService";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(KeycloakService.keycloak?.tokenParsed, null, 2)}</pre>
    </div>
  );
}
