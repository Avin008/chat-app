import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./layout";
import { LoginForm, SignupForm } from "./components";
import Root from "./routes/root";
import Chat from "./routes/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Root /> },
      { path: "login", element: <LoginForm /> },
      { path: "signup", element: <SignupForm /> },
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
