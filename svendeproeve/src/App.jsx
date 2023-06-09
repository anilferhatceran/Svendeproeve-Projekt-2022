import "./index.css";
import Header from "./Components/Header";
import Frontpage from "./Components/Frontpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import MapTest from "./Components/MapTest";
import Agentpanel from "./Pages/Agentpanel";
import CasePage from "./Components/CasePage";
import TestingPurposes from "./Components/TestingPurposes";
import CreateCaseDesign from "./Components/CreateCaseDesign";
import { ToastContainer } from "react-toastify";
import MyCasesPage from "./Components/MyCasesPage";
import HelpPage from "./Components/helpPage";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/about" element={<CreateCaseDesign />} />
          <Route path="/case/:id" element={<CasePage />} />
          <Route path="/agentpanel" element={<Agentpanel />} />
          <Route path="/myCases" element={<MyCasesPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
