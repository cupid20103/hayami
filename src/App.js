import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// @import components
import Loading from "./components/Loading";
// @import pages
const Landing = React.lazy(() => import("./pages/landing"));

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
