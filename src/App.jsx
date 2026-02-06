import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Overview } from "./pages/Overview";
import { Contact } from "./pages/Contact";
import { Brochure } from "./pages/Brochure";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "brochure",
          element: <Brochure />,
        },
      ],
    },
    {
      basename: "/springBootAiWorkshop",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
