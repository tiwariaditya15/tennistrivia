import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import { Login } from "../../pages/Login";
import Quizes from "../../pages/Quizes";
import Result from "../../pages/Result";
import Scores from "../../pages/Scores";
import PrivateRoute from "./PrivateRoute";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="quizes/:category" element={<Quizes />} />
      <PrivateRoute path="scores" element={<Scores />} />
      <PrivateRoute path="result" element={<Result />} />
    </Routes>
  );
}
