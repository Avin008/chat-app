import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./layout";
import {
  LoginForm,
  SignupForm,
  AuthGuard,
} from "./components";
import Root from "./routes/root";
import Chat from "./routes/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <AuthGuard>
            <Root />
          </AuthGuard>
        ),
      },
      {
        path: "login",
        element: (
          <AuthGuard>
            <LoginForm />
          </AuthGuard>
        ),
      },
      {
        path: "signup",
        element: (
          <AuthGuard>
            <SignupForm />
          </AuthGuard>
        ),
      },
      {
        path: "chat/:userID",
        element: <Chat />,
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
