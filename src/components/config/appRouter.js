import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home"; // Adjusted import path
import LoanPageOne from "../../pages/lon-page-one"; // Adjusted import path
import LoanPageTwo from "../../pages/lon-page-two"; // Adjusted import path
import LoanPageThree from "../../pages/lon-page-three"; // Adjusted import path
import LoanPageFour from "../../pages/lon-page-four"; // Adjusted import path

const Approuter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loanpageone" element={<LoanPageOne />} />
        <Route path="/loanpagetwo" element={<LoanPageTwo />} />
        <Route path="/loanpagethree" element={<LoanPageThree />} />
        <Route path="/loanpagefour" element={<LoanPageFour />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default Approuter;
  