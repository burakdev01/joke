// src/pages/ControlPanel.jsx
import React from "react";
import { db, ref, set } from "./firebase";

function ControlPanel() {
  const triggerAlarm = () => {
    const triggerRef = ref(db, "alarm/trigger");
    set(triggerRef, true);
    setTimeout(() => {
      set(triggerRef, false);
    }, 3000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Şaka Kontrol Paneli</h2>
      <button onClick={triggerAlarm}>Şakayı Başlat</button>
    </div>
  );
}

export default ControlPanel;
