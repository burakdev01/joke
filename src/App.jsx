// src/App.js
import React from "react";
import ControlPanel from "./ControlPanel";
import AlarmPage from "./AlarmPage";
// import AlarmPage from './pages/AlarmPage'; // şaka yaparken bunu açarsın

function App() {
  return (
    <div>
      <ControlPanel />
      <AlarmPage />
    </div>
  );
}

export default App;
