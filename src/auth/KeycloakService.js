import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
});

const initKeycloak = () =>
  new Promise((resolve, reject) => {
    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
        pkceMethod: "S256",
      })
      .then((authenticated) => {
        if (!authenticated) {
          keycloak.login();
        }

        setInterval(() => {
          keycloak.updateToken(60).catch(() => {
            keycloak.logout();
          });
        }, 20000);

        resolve(keycloak);
      })
      .catch((err) => reject(err));
  });

const KeycloakService = {
  keycloak,
  initKeycloak,
  login: () => keycloak.login(),
  logout: () => keycloak.logout(),
  getToken: () => keycloak.token,
  getRefreshToken: () => keycloak.refreshToken,
  getUserName: () => keycloak?.tokenParsed?.preferred_username,
};

export default KeycloakService;
