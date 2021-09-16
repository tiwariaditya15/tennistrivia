import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Quizes from "../../pages/Quizes";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="quizes/:category" element={<Quizes />} />
    </Routes>
  );
}
