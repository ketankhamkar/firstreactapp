import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Services = lazy(() => import("../screens/Services"));
const Contacts = lazy(() => import("../screens/Contacts"));
const UserProfile = lazy(() => import("../screens/UserProfile"));
const App = lazy(() => import("../App"));
const Login = lazy(() => import("../screens/Login"));

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ...Loading
          </div>
        }
      >
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/Services" Component={Services} />
          <Route path="/Contacts" Component={Contacts} />
          <Route path="/Contacts/:id" Component={UserProfile} />
          <Route path="/Login" Component={Login} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default RoutesApp;