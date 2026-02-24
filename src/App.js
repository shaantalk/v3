import "./Styles/App.css";
import "./Styles/OverrideMaterialUITheme.css";
import "./Styles/ColorPreferences.css";
import AppContainer from "./Pages/AppContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <AppContainer />
      </Router>
    </div>
  );
}

export default App;
