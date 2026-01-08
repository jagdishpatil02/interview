import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Accordian = lazy(() => import("./pages/Accordian"));
const FetchAPI = lazy(() => import("./pages/FetchAPI"));
const Pagination = lazy(() => import("./pages/Pagination"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/fetchapi" element={<FetchAPI />} />
          <Route path="/pagination" element={<Pagination />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
