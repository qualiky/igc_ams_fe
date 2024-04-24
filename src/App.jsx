import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
  return (
    <Router>
      <CustomRoutes />
    </Router>
  );
}

export default App;
