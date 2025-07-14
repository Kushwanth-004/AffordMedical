import { Routes, Route, BrowserRouter } from "react-router-dom";
import Urlform from "./components/Urlform";
import StatsPage from "./components/Statespage";
import Redirection from "./components/Redirection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Urlform />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<Redirection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
