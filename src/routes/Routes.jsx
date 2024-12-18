import { createBrowserRouter } from "react-router-dom";
import { Home, About, Blog, Work, ProjectPage, Contact, BlogPage } from "../pages";

import App from "../App";



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path : '/home',
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/blog",
      //   element: <Blog />,
      // },
      {
        path: "/blog/:id",
        element: <BlogPage />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/work/:id",
        element: <ProjectPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      }
    ],
  },
]);

export default routes;
