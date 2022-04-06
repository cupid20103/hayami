import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// @import pages
const Landing = React.lazy(() => import("./pages/landing"));

const App = () => {
  return (
    <>
      <Suspense fallback={<></>}>
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
