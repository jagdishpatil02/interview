import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import { lazy, Suspense } from "react";
import { UserProvider } from "./pages/UserContext";
import UseLocalStorage from "./hooks/useLocalStorage";

const Home = lazy(() => import("./pages/Home"));
const Accordian = lazy(() => import("./pages/Accordian"));
const FetchAPI = lazy(() => import("./pages/FetchAPI"));
const Pagination = lazy(() => import("./pages/Pagination"));
const HOC = lazy(() => import("./pages/Dashboard"));
const Context = lazy(() => import("./pages/UserDataContext"));

function App() {
  const [, setLocalStorage] = UseLocalStorage("user", "jagdish");

  const handleClick = () => {
    setLocalStorage("jagdish");
  };
  return (
    <>
      <UserProvider>
        <Navbar />
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="/fetchapi" element={<FetchAPI />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/hoc" element={<HOC />} />
            <Route path="/context" element={<Context />} />
          </Routes>
        </Suspense>
      </UserProvider>
      <button onClick={handleClick}>Save User</button>
    </>
  );
}

export default App;
