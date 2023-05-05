import './App.css';
import { Routes, Route } from "react-router-dom";
import ThirdParty from "./thirdparty/thirdparty";
import MassUpdates from "./massupdates/massupdates";
import Details from "./details/details";

import Options from "./options/options";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ThirdParty />} />  
       </Routes>
    </div>
  );
}

export default App;
