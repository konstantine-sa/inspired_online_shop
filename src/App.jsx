import { MainPage } from "./Components/MainPage/MainPage";
import { Root } from "./Routes/Root";
import { ErrorPage } from "./Components/Footer/ErrorPage/ErrorPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="women" element={<MainPage gender="women" />} />
      <Route path="men" element={<MainPage gender="men" />} />
      <Route path="women/:category" element={<MainPage gender="women" />} />
      <Route path="men/:category" element={<MainPage gender="men" />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => <RouterProvider router={router}></RouterProvider>;
