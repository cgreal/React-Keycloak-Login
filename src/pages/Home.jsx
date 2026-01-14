import React from "react";
import KeycloakService from "../auth/KeycloakService";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {KeycloakService.getUserName()}</p>
      <button onClick={() => KeycloakService.logout()}>Logout</button>
    </div>
  );
}
