# React Keycloak Login
This project demonstrates **authentication with Keycloak in a React application**. Keycloak runs in Docker and the React app authenticates users through Keycloak.

---
## 🐳 Keycloak’ı Docker ile Çalıştırma /  Running Keycloak with Docker

Aşağıdaki komutu çalıştırın / Run the following command:

```bash
docker run -d \
  --name keycloak \
  -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:24.0 \
  start-dev
```
### ❓ Bu komut ne yapar? / What does this command do?

-d → arkaplanda çalıştırır / runs in detached mode

--name keycloak →  container name

-p 8080:8080 → erişim http://localhost:8080 / exposes admin UI

KEYCLOAK_ADMIN=admin →  admin username

KEYCLOAK_ADMIN_PASSWORD=admin → admin password

start-dev →  development mode

## 🌐 Keycloak Yönetici Paneline Erişim / Accessing Keycloak Admin Console
In browser:

- http://localhost:8080

**Giriş bilgileri / Credentials:**

 **Username**: admin

 **Password**: admin

**Buradan aşağıdakileri yapın / From here you will:**

✔ Realm oluşturun / Create a realm

✔ Client oluşturun / Create a client

✔ Redirect URL ekleyin / Add redirect URL

✔ Client ID ve Realm adını React'e tanımlayın

 **🔧 Keycloak Ayarları / Keycloak Configuration**

http://localhost:3000/*

- Create new realm

- Create new client

- Client type: public

 **Valid redirect URI:**

http://localhost:3000/*

## ⚛️ React Tarafında Keycloak Entegrasyonu / Keycloak Integration in React

Örnek Keycloak yapılandırması / Example configuration:

```
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "YOUR_REALM",
  clientId: "YOUR_CLIENT_ID",
});

export default keycloak;
Uygulamada başlatma / Initialize in app
javascript
Copy code
keycloak
  .init({ onLoad: "login-required" })
  .then(authenticated => {
    console.log("Auth:", authenticated);
  })
  .catch(e => console.error(e));
```

🔐 Role Based Routing Örneği
🔐 Role-Based Routing Example
TR – sadece ROLE_ADMIN görebilir
javascript
Copy code
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, keycloak }) => {
  const hasRole = keycloak?.tokenParsed?.realm_access?.roles?.includes("admin");

  return hasRole ? children : <Navigate to="/unauthorized" />;
};

export default AdminRoute;
EN – only ROLE_ADMIN can access
javascript
Copy code
const hasRole = keycloak?.tokenParsed?.realm_access?.roles?.includes("admin");
Kullanım / Usage:

jsx
Copy code
<Route
  path="/admin"
  element={
    <AdminRoute keycloak={keycloak}>
      <AdminPage />
    </AdminRoute>
  }
/>
▶️ Çalıştırma / Running the app
TR
bash
Copy code
npm install
npm start
EN
bash
Copy code
npm install
npm start
React app:

arduino
Copy code
http://localhost:3000
✔ Özellikler / Features
🔑 Login & Logout

🪪 Access token retrieval

👥 Role based pages

🔒 Protected routes

🚫 Unauthorized page

📝 Notlar / Notes
start-dev geliştirme içindir / for development only

Production ortamında ayrı DB ve HTTPS önerilir

Port değişirse React config güncellenmelidir

🤝 Katkı / Contributing
Pull request açabilirsiniz / PRs are welcome

Sorun bildirebilirsiniz / Open issues



# Project Title

# React Keycloak Login
This project demonstrates **authentication with Keycloak in a React application**. Keycloak runs in Docker and the React app authenticates users through Keycloak.

---
## 🐳 Keycloak’ı Docker ile Çalıştırma /  Running Keycloak with Docker

Aşağıdaki komutu çalıştırın / Run the following command:

```bash
docker run -d \
  --name keycloak \
  -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:24.0 \
  start-dev
```
### ❓ Bu komut ne yapar? / What does this command do?

-d → arkaplanda çalıştırır / runs in detached mode

--name keycloak →  container name

-p 8080:8080 → erişim http://localhost:8080 / exposes admin UI

KEYCLOAK_ADMIN=admin →  admin username

KEYCLOAK_ADMIN_PASSWORD=admin → admin password

start-dev →  development mode

## 🌐 Keycloak Yönetici Paneline Erişim / Accessing Keycloak Admin Console
In browser:

- http://localhost:8080

**Giriş bilgileri / Credentials:**

 **Username**: admin

 **Password**: admin

**Buradan aşağıdakileri yapın / From here you will:**

✔ Realm oluşturun / Create a realm

✔ Client oluşturun / Create a client

✔ Redirect URL ekleyin / Add redirect URL

✔ Client ID ve Realm adını React'e tanımlayın

 **🔧 Keycloak Ayarları / Keycloak Configuration**

http://localhost:3000/*

- Create new realm

- Create new client

- Client type: public

 **Valid redirect URI:**

http://localhost:3000/*

## ⚛️ React Tarafında Keycloak Entegrasyonu / Keycloak Integration in React

Örnek Keycloak yapılandırması / Example configuration:

```
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "YOUR_REALM",
  clientId: "YOUR_CLIENT_ID",
});

export default keycloak;
Uygulamada başlatma / Initialize in app
javascript
Copy code
keycloak
  .init({ onLoad: "login-required" })
  .then(authenticated => {
    console.log("Auth:", authenticated);
  })
  .catch(e => console.error(e));
```

## 🔐 Role Based Routing Örneği / Role-Based Routing Example

```
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, keycloak }) => {
  const hasRole = keycloak?.tokenParsed?.realm_access?.roles?.includes("admin");

  return hasRole ? children : <Navigate to="/unauthorized" />;
};

export default AdminRoute;
```
- Only ROLE_ADMIN can access

``` 
const hasRole = keycloak?.tokenParsed?.realm_access?.roles?.includes("admin");
```
Kullanım / Usage:
```
<Route
  path="/admin"
  element={
    <AdminRoute keycloak={keycloak}>
      <AdminPage />
    </AdminRoute>
  }
/>
```
**▶️ Çalıştırma / Running the app**

Copy code
npm install
npm start
React app:

http://localhost:3000

**✔ Özellikler / Features:**
🔑 Login & Logout

🪪 Access token retrieval

👥 Role based pages

🔒 Protected routes

🚫 Unauthorized page

**📝 Notlar / Notes**

start-dev geliştirme içindir / for development only

Production ortamında ayrı DB ve HTTPS önerilir

Port değişirse React config güncellenmelidir



