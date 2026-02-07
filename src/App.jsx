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

  useEffect(() => {
    const createSparks = (x, y) => {
      for (let i = 0; i < 30; i++) {
        const spark = document.createElement("div");
        spark.className = "spark";

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 50 + 20;

        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 600);
      }
    };

    const handleClick = (e) => {
      createSparks(e.clientX, e.clientY);
    };

    const handleTouch = (e) => {
      const touch = e.touches[0];
      createSparks(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  useEffect(() => {
    const colors = ["#00f5ff", "#7fffd4", "#ffffff", "#0a0a0a"];

    const createCircuitSparks = (x, y) => {
      for (let i = 0; i < 14; i++) {
        const line = document.createElement("span");
        line.className = "circuit-spark";

        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const length = Math.random() * 60 + 30;

        line.style.left = `${x}px`;
        line.style.top = `${y}px`;
        line.style.background = color;
        line.style.setProperty("--x", `${Math.cos(angle) * length}px`);
        line.style.setProperty("--y", `${Math.sin(angle) * length}px`);
        line.style.setProperty("--r", `${angle}rad`);

        document.body.appendChild(line);

        setTimeout(() => line.remove(), 700);
      }
    };

    const handleClick = (e) => {
      createCircuitSparks(e.clientX, e.clientY);
    };

    const handleTouch = (e) => {
      const touch = e.touches[0];
      if (touch) createCircuitSparks(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  const router = createBrowserRouter(
    [
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
    ],
    {
      basename: "/springBootAiWorkshop",
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
