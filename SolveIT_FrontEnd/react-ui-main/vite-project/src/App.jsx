import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./solveItComponents/NavBar";
import "./App.css";
import Home from "./solveItPages/Home";
import Login from "./solveItPages/Login";
import Dashboard from "./solveItPages/Dashboard";
import ErrorPage from "./solveItPages/ErrorPage";
import Admin from "./solveItPages/Admin";
import Challenges from "./solveItPages/Challenges";
import Register from "./solveItPages/Register";
import { AuthProvider } from "./solveItComponents/AuthProvider";
import Pricing from "./solveItPages/Pricing";
import Scoreboard from "./solveItPages/Scoreboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/scoreboard" element={<Scoreboard />} />

    </Route>,
  ),
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  );
}

export default App;
