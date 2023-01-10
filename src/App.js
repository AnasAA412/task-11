import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard";
import Nav from "./components/includes/Nav";
import styled from "styled-components";
import Accounts from "./components/screens/Accounts";
import Products from "./components/screens/Products";
import OverView from "./components/screens/OverView";
import GuestList from "./components/screens/GuestList";
import TemperoryTraffic from "./components/screens/TemperoryTraffic";
import CominSoon from "./components/screens/CominSoon";

function App() {
  return (
    <>
      <MainContainer>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/overview" element={<OverView />} />
              <Route path="/guest-list" element={<GuestList />} />
              <Route path="/temperory-traffic" element={<TemperoryTraffic />} />
            </Route>

            <Route path="*" element={<CominSoon />} />
          </Routes>
        </Router>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  display: flex;
`;
export default App;
