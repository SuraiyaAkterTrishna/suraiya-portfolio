import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   const element = document.getElementById("content");
  //   element.style.overflow = "hidden";
  // }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div id="content">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
