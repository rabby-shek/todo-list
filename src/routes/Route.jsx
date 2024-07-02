import { createBrowserRouter } from "react-router-dom";
import { Dashboard, NotFound, TaskList } from "../pages";
import Main from "../layout/main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/task-list",
        element: <TaskList />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
