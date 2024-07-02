import { createBrowserRouter } from "react-router-dom";
import { Dashboard, TaskList } from "../pages";
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
    ],
  },
]);

export default router;
