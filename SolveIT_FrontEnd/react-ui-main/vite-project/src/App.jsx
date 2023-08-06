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
import Scoreboard from "./solveItPages/Scoreboard";
import Forgot from "./solveItPages/Forgot";
import Admin from "./solveItPages/Admin";
import Challenges from "./solveItPages/Challenges";
import Users from "./solveItPages/Users";
import Profile from "./solveItPages/Profile";
import Register from "./solveItPages/Register";
import { AuthProvider } from "./solveItComponents/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/register" element={<Register />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="*" element={<ErrorPage />} />
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
